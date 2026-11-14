package swt2.kids_app.backend.swt2_app.business.event;

import org.springframework.stereotype.Service;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public void saveEvent(Event event){
        eventRepository.save(event);
    }
}
