package swt2.kids_app.stadt.business.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "WORKSHOP", description = "Workshop-Veranstaltung")
@JsonIgnoreProperties(ignoreUnknown = true)
public class WorkshopDTO extends BaseEventDTO {
    private String topic;
    private String speaker;
    private int durationMinutes;

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getTopic() {
        return topic;
    }

    public void setSpeaker(String speaker) {
        this.speaker = speaker;
    }

    public String getSpeaker() {
        return speaker;
    }

    public void setDurationMinutes(int durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public int getDurationMinutes() {
        return durationMinutes;
    }

}
