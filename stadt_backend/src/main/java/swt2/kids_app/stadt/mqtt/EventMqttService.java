package swt2.kids_app.stadt.mqtt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import swt2.kids_app.stadt.business.dtos.BaseEventDTO;

@Service
public class EventMqttService extends MqttService<BaseEventDTO>{
    private static final Logger log = LoggerFactory.getLogger(EventMqttService.class);
    private static final String topic = "events/created";

    public EventMqttService(MqttProperties props) {
        super(props, BaseEventDTO.class);
    }

    @PostConstruct
    public void init() {
        log.info("MQTT ist gestartet");
        this.client.toAsync().subscribeWith()
                .topicFilter(topic)
                .callback(publish -> {
                    log.info("Nachricht ist beim brocker");
                })
                .send();
    }

    @Override
    protected void onMessageReceived(String topic, BaseEventDTO message) {
        log.info("Message ist angekommen");
        try {
            log.info(this.objectMapper.writeValueAsString(message));
        } catch (Exception e) {
            log.error("Fehler bei Object Mapper: {}\n", e.getMessage());
        }
    }

    public void sentEvent(BaseEventDTO  eventDTO) throws Exception{
        log.info(this.objectMapper.writeValueAsString(eventDTO));
        send(topic, eventDTO);
    }
}
