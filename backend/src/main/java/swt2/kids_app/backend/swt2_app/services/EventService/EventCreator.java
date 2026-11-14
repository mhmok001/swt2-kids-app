package swt2.kids_app.backend.swt2_app.services.EventService;

import org.springframework.stereotype.Service;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;

@Service
public abstract class EventCreator {
    abstract Event factoryMethod(BaseEventDTO dto);
}
