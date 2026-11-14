package swt2.kids_app.backend.swt2_app.services.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.dtos.KulturveranstalltungDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.EventRepository;
import swt2.kids_app.backend.swt2_app.mapper.KulturEventMapper;

@Service
public class KulturveranstaltungService extends EventCreator {
    @Autowired
    private final EventRepository eventRepository;

    @Autowired
    private final KulturEventMapper kulturEventMapper;

    public KulturveranstaltungService(EventRepository eventRepository, KulturEventMapper kulturEventMapper) {
        this.eventRepository = eventRepository;
        this.kulturEventMapper = kulturEventMapper;
    }

    @Override
    public Event factoryMethod(BaseEventDTO dto) {
        return eventRepository.save(kulturEventMapper.toEntity((KulturveranstalltungDTO) dto));
    }
}
