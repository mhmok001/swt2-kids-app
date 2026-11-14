package swt2.kids_app.stadt.business.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "KULTUR", description = "Kulturelle Veranstaltung")
@JsonIgnoreProperties(ignoreUnknown = true)
public class KulturveranstalltungDTO extends BaseEventDTO {

    private String theme;

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getTheme() {
        return theme;
    }

}
