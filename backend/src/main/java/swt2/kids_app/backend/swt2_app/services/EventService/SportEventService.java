package swt2.kids_app.backend.swt2_app.services.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.dtos.SportDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.EventRepository;
import swt2.kids_app.backend.swt2_app.mapper.SportEventMapper;

@Service
public class SportEventService extends EventCreator {

    @Autowired
    private final EventRepository eventRepository;

    @Autowired
    private final SportEventMapper sportEventMapper;

    public SportEventService(EventRepository eventRepository, SportEventMapper sportEventMapper) {
        this.eventRepository = eventRepository;
        this.sportEventMapper = sportEventMapper;
    }

    @Override
    public Event factoryMethod(BaseEventDTO dto) {
        return eventRepository.save(sportEventMapper.toEntity((SportDTO) dto));
    }
}
