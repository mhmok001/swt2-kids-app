package swt2.kids_app.backend.swt2_app.business.event;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("WORKSHOP")
public class Workshop extends Event {
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
