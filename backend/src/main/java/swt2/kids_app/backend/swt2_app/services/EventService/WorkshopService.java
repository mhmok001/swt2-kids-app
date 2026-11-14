package swt2.kids_app.backend.swt2_app.services.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.dtos.WorkshopDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.EventRepository;
import swt2.kids_app.backend.swt2_app.mapper.WorkshopEventMapper;

@Service
public class WorkshopService extends EventCreator {
    @Autowired
    private final EventRepository eventRepository;

    @Autowired
    private final WorkshopEventMapper workshopEventMapper;

    public WorkshopService(EventRepository eventRepository, WorkshopEventMapper workshopEventMapper) {
        this.eventRepository = eventRepository;
        this.workshopEventMapper = workshopEventMapper;
    }

    @Override
    public Event factoryMethod(BaseEventDTO dto) {
        return eventRepository.save(workshopEventMapper.toEntity((WorkshopDTO) dto));
    }
}
