package swt2.kids_app.stadt.mqtt;

import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.hivemq.client.mqtt.MqttClient;
import com.hivemq.client.mqtt.MqttClientState;
import com.hivemq.client.mqtt.mqtt3.Mqtt3AsyncClient;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.nio.charset.StandardCharsets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class MqttService<T> {
    private static final Logger logger = LoggerFactory.getLogger(MqttService.class);
    protected final Mqtt3AsyncClient client;
    protected final ObjectMapper objectMapper = new ObjectMapper();
    private final Class<T> clazz;

    public MqttService(MqttProperties props, Class<T> clazz) {
        this.clazz = clazz;
        this.client = MqttClient.builder()
                .identifier(props.getClientId())
                .serverHost(props.getBrokerUrl())
                .serverPort(1883)
                .useMqttVersion3()
                .buildAsync();
        logger.info("Mqtt wird versucht zu starten");
        client.connectWith()
                .cleanSession(true)
                .send()
                .whenComplete((ack, ex) -> {
                    if (ex != null)
                        ex.printStackTrace();
                });
        objectMapper.registerModule(new JavaTimeModule());
    }

    public void send(String topic, T payload) throws Exception {
        String json = objectMapper.writeValueAsString(payload);
        client.publishWith()
                .topic(topic)
                .payload(json.getBytes(StandardCharsets.UTF_8))
                .send();
    }

    public void subscribe(String topic) {
        client.subscribeWith()
                .topicFilter(topic)
                .callback(publish -> {
                    try {
                        String json = StandardCharsets.UTF_8.decode(publish.getPayload().get()).toString();
                        T obj = objectMapper.readValue(json, clazz);
                        onMessageReceived(publish.getTopic().toString(), obj);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                })
                .send();
    }

    public void disconnect() {
        if (client.getState() == MqttClientState.CONNECTED) {
            client.disconnect();
        }
    }

    protected abstract void onMessageReceived(String topic, T message);
}
