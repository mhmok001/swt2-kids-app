package swt2.kids_app.backend.swt2_app.services.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.Kulturveranstaltung;
import swt2.kids_app.backend.swt2_app.business.typ.Category;
import swt2.kids_app.backend.swt2_app.services.EventService.Exceptions.EventDispatcherException;

@Service
public class EventDispatcher {
    @Autowired
    private final SportEventService sportEventService;

    @Autowired
    private final WorkshopService workshopService;

    @Autowired
    private final KonzertService konzertService;

    @Autowired
    private final KulturveranstaltungService kulturveranstaltungService;

    public EventDispatcher(SportEventService sportEventService, WorkshopService workshopService, KonzertService konzertService, KulturveranstaltungService kulturveranstaltungService) {
        this.sportEventService = sportEventService;
        this.workshopService = workshopService;
        this.konzertService = konzertService;
        this.kulturveranstaltungService = kulturveranstaltungService;
    }

    public Event dispatch(BaseEventDTO dto) {
        return switch (dto.getCategory()) {
            case Category.SPORT -> sportEventService.factoryMethod(dto);
            case Category.WORKSHOP -> workshopService.factoryMethod(dto);
            case Category.KONZERTE -> konzertService.factoryMethod(dto);
            case Category.KULTUR -> kulturveranstaltungService.factoryMethod(dto);
            default -> throw new EventDispatcherException(dto.getCategory());
        };
    }
}
