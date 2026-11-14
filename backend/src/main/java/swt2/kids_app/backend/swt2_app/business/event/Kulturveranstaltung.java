package swt2.kids_app.backend.swt2_app.business.event;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("KULTUR")
public class Kulturveranstaltung extends Event {
    private String theme;

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getTheme() {
        return theme;
    }
}
