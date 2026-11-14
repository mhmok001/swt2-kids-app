package swt2.kids_app.backend.swt2_app.services.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.dtos.KonzertDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.EventRepository;
import swt2.kids_app.backend.swt2_app.mapper.KonzertEventMapper;

@Service
public class KonzertService  extends EventCreator {
    @Autowired
    private final EventRepository eventRepository;

    @Autowired
    private final KonzertEventMapper konzertEventMapper;

    public KonzertService(EventRepository eventRepository, KonzertEventMapper konzertEventMapper) {
        this.eventRepository = eventRepository;
        this.konzertEventMapper = konzertEventMapper;
    }

    @Override
    public Event factoryMethod(BaseEventDTO dto) {
        return eventRepository.save(konzertEventMapper.toEntity((KonzertDTO) dto));
    }
}
