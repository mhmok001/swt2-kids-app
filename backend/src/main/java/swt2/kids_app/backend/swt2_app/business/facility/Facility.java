package swt2.kids_app.backend.swt2_app.business.facility;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import swt2.kids_app.backend.swt2_app.business.address.Address;
import swt2.kids_app.backend.swt2_app.business.event.Event;

@Entity
@Transactional
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    @OneToOne
    private Address address;

    @OneToMany(mappedBy = "facility", cascade = CascadeType.ALL)
    private List<Event> events = new ArrayList<>();

    public void setAddress(Address address){
        this.address = address;
    }

    public Address getAddress(){
        return address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public void addEvent(Event event) {
        events.add(event);
    }

    public boolean removeEvent(Event event){
        if (events.contains(event)) {
            events.remove(event);
            return true;
        }
        return false;
    }


}
