package swt2.kids_app.stadt.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import swt2.kids_app.stadt.business.dtos.*;
import swt2.kids_app.stadt.mqtt.EventMqttService;

@RestController
@Tag(name = "Veranstaltungs-Management Stadt Herne", description = "APIs for managing events")
public class EventController {
    private static final Logger logger = LoggerFactory.getLogger(EventController.class);

    @Autowired
    private EventMqttService eventMqttService;

    @Operation(summary = "Create a konzert", description = "Created an event of the city of Herne")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Event retrieved successfully",
                    content = @Content(schema = @Schema(implementation = KonzertDTO.class)))
    })
    @PostMapping("create/konzert")
    public ResponseEntity<?> createEvent(@RequestBody KonzertDTO baseEventDTO) {
        try {
            logger.info("Veranstaltungsdaten empfangen");
            eventMqttService.sentEvent(baseEventDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Fehler ist aufgetreten {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @Operation(summary = "Create a sport", description = "Created an event of the city of Herne")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Event retrieved successfully",
                    content = @Content(schema = @Schema(implementation = SportDTO.class)))
    })
    @PostMapping("create/sport")
    public ResponseEntity<?> createEvent(@RequestBody SportDTO baseEventDTO) {
        try {
            logger.info("Veranstaltungsdaten empfangen");
            eventMqttService.sentEvent(baseEventDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Fehler ist aufgetreten {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @Operation(summary = "Create a kultur", description = "Created an event of the city of Herne")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Event retrieved successfully",
                    content = @Content(schema = @Schema(implementation = KulturveranstalltungDTO.class)))
    })
    @PostMapping("create/kultur")
    public ResponseEntity<?> createEvent(@RequestBody KulturveranstalltungDTO baseEventDTO) {
        try {
            logger.info("Veranstaltungsdaten empfangen");
            eventMqttService.sentEvent(baseEventDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Fehler ist aufgetreten {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    @Operation(summary = "Create a workshop", description = "Created an event of the city of Herne")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Event retrieved successfully",
                    content = @Content(schema = @Schema(implementation = WorkshopDTO.class)))
    })
    @PostMapping("create/workshop")
    public ResponseEntity<?> createEvent(@RequestBody WorkshopDTO baseEventDTO) {
        try {
            logger.info("Veranstaltungsdaten empfangen");
            eventMqttService.sentEvent(baseEventDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            logger.error("Fehler ist aufgetreten {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

}
