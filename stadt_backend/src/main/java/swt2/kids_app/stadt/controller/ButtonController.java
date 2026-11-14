package swt2.kids_app.stadt.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swt2.kids_app.stadt.business.dtos.*;
import swt2.kids_app.stadt.mqtt.EventMqttService;

@RestController
public class ButtonController {
    private static final Logger logger = LoggerFactory.getLogger(ButtonController.class);

    @GetMapping("/")
    @ResponseBody
    public String showMainPage() {
        return """
                <!DOCTYPE html>
                <html>
                <head>
                <title>Stadt Dienst Test</title>
                </head>
                <body>
                    <h1>Stadt Dienst - Testseite</h1>
                    <form action="/event" method="post">
                        <input type="range" id="facility" name="facility" min="1" max="5" value="3" />
                        <button type="submit" name="type" value="konzertDTO">Konzert erzeugen</button>
                        <button type="submit" name="type" value="workshopDTO">Workshop erzeugen</button>
                        <button type="submit" name="type" value="sportveranstaltungDTO">Sportveranstaltung erzeugen</button>
                        <button type="submit" name="type" value="kulturveranstaltungDTO">Kulturveranstaltung erzeugen</button>
                    </form>
                </body>
                </html>
                """;
    }
}
