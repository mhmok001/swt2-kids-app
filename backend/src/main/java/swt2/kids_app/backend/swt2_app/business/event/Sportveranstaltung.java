package swt2.kids_app.backend.swt2_app.business.event;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("SPORT")
public class Sportveranstaltung extends Event {
    private String sportType;
    private boolean isCompetition;

    public Sportveranstaltung() {

    }

    public Sportveranstaltung(boolean isCompetition, String sportType) {
        this.isCompetition = isCompetition;
        this.sportType = sportType;
    }

    public void setSportType(String sportType) {
        this.sportType = sportType;
    }

    public String getSportType() {
        return sportType;
    }

    public void setIsCompetition(boolean isCompetition) {
        this.isCompetition = isCompetition;
    }

    public boolean getIsCompetition() {
        return isCompetition;
    }
}
