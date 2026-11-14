package swt2.kids_app.stadt.business.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "SPORT", description = "Sportveranstaltung")
@JsonIgnoreProperties(ignoreUnknown = true)
public class SportDTO extends BaseEventDTO {

    private String sportType;
    private boolean isCompetition;

    public void setSportType(String sportType) {
        this.sportType = sportType;
    }

    public String getSportType() {
        return sportType;
    }

    public boolean isCompetition() {
        return isCompetition;
    }

    public void setCompetition(boolean competition) {
        isCompetition = competition;
    }
}
