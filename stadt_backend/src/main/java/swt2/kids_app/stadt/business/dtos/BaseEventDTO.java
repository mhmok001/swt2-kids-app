package swt2.kids_app.stadt.business.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import swt2.kids_app.stadt.business.typ.Category;
import swt2.kids_app.stadt.business.typ.Status;

import java.time.LocalDate;
import java.time.LocalTime;

@Schema(
        description = "Basisklasse für alle Veranstaltungen",
        discriminatorProperty = "category",
        oneOf = {
                SportDTO.class,
                KonzertDTO.class,
                WorkshopDTO.class,
                KulturveranstalltungDTO.class
        }
)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.EXISTING_PROPERTY,
        property = "category",
        visible = true
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = SportDTO.class, name = "SPORT"),
        @JsonSubTypes.Type(value = KonzertDTO.class, name = "KONZERTE"),
        @JsonSubTypes.Type(value = WorkshopDTO.class, name = "WORKSHOP"),
        @JsonSubTypes.Type(value = KulturveranstalltungDTO.class, name = "KULTUR")
})
@JsonIgnoreProperties(ignoreUnknown = true)
public abstract class BaseEventDTO {
    private Long facility_id;
    private String title;
    private Category category;
    private String organizer;
    @Schema(description = "Status des Events", enumAsRef = true)
    private Status status;

    @Schema(type = "string", format = "date", example = "2025-07-16")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @Schema(type = "string", format = "date", example = "2025-07-16")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    @Schema(type = "string", format = "time", example = "13:30:00")
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime startTime;
    @Schema(type = "string", format = "time", example = "13:30:00")
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime endTime;

    public BaseEventDTO() {}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public Long getFacility_id() {
        return facility_id;
    }

    public void setFacility_id(Long facility_id) {
        this.facility_id = facility_id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
