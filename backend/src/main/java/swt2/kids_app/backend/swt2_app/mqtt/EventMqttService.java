package swt2.kids_app.backend.swt2_app.mqtt;

import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.annotation.PostConstruct;
import org.springframework.transaction.annotation.Transactional;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.EventService;
import swt2.kids_app.backend.swt2_app.business.facility.Facility;
import swt2.kids_app.backend.swt2_app.business.facility.FacilityRepository;
import swt2.kids_app.backend.swt2_app.business.facility.FacilityService;
import swt2.kids_app.backend.swt2_app.services.EventService.EventDispatcher;

@Service
public class EventMqttService extends MqttService<BaseEventDTO>{
    private static final Logger logger = LoggerFactory.getLogger(EventMqttService.class);
    private final EventDispatcher eventDispatcher;
    private final FacilityService facilityService ;
    private final EventService eventService;
    private static final String topic = "events/created";

    public EventMqttService(MqttProperties props, EventDispatcher eventDispatcher, FacilityService facilityService, EventService eventService) {
        super(props, BaseEventDTO.class);
        this.eventDispatcher = eventDispatcher;
        this.facilityService = facilityService;
        this.eventService = eventService;
    }

    @PostConstruct
    public void init() {
        subscribe(topic); // Achte auf gleiches Topic wie im Stadt-Frontend
        logger.info("MQTT-Subscription auf 'event/created' eingerichtet.");
    }

    @Override
    @Transactional
    protected void onMessageReceived(String topic, BaseEventDTO message) {
        logger.info("Event empfangen über MQTT:");
        try {
            /*logger.info(this.objectMapper.writeValueAsString(message));
            Long facility_id = message.getFacility_id();
            logger.info("Facility ID: {}", facility_id);
            if (facilityService.existById(facility_id)) {
                throw  new EntityNotFoundException("No Facility found!");
            }*/
            Event event = eventDispatcher.dispatch(message);
        } catch (Exception e) {
            logger.error("Fehler beim Parsen der Nachricht {}", e.getMessage() ,e);
        }
    }
}
