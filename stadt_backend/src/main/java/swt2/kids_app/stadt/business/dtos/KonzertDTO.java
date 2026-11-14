package swt2.kids_app.stadt.business.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "KONZERTE", description = "Konzert-Event")
@JsonIgnoreProperties(ignoreUnknown = true)
public class KonzertDTO extends BaseEventDTO {

    private String artist;
    private String genre;

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getArtist() {
        return artist;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return genre;
    }

}
