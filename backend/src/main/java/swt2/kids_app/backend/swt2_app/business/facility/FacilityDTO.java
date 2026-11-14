package swt2.kids_app.backend.swt2_app.business.facility;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import swt2.kids_app.backend.swt2_app.business.address.Address;
import swt2.kids_app.backend.swt2_app.business.event.Event;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FacilityDTO {
    private Long id;
    private String name;
    private String description;
    private Address address;
    private List<Event> events;

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

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
