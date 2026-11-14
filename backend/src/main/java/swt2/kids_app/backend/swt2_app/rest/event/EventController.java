package swt2.kids_app.backend.swt2_app.rest.event;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import swt2.kids_app.backend.swt2_app.business.dtos.BaseEventDTO;
import swt2.kids_app.backend.swt2_app.business.event.Event;
import swt2.kids_app.backend.swt2_app.business.event.EventRepository;
import swt2.kids_app.backend.swt2_app.services.EventService.EventDispatcher;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventDispatcher eventDispatcher;

    private final EventRepository eventRepository;

    public EventController(EventDispatcher eventDispatcher, EventRepository eventRepository) {
        this.eventDispatcher = eventDispatcher;
        this.eventRepository = eventRepository;
    }

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody BaseEventDTO dto) {
        Event created = eventDispatcher.dispatch(dto);
        URI location = URI.create("/events/" + created.getId());
        return ResponseEntity
                .created(location)
                .body(created);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
        if (!eventRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        eventRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        return eventRepository.findById(id)
                .map(existingEvent -> {
                    updatedEvent.setId(id);
                    Event saved = eventRepository.save(updatedEvent);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
