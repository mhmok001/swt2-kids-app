package swt2.kids_app.backend.swt2_app.mapper;

import org.mapstruct.Mapper;
import swt2.kids_app.backend.swt2_app.business.dtos.SportDTO;
import swt2.kids_app.backend.swt2_app.business.event.Sportveranstaltung;

@Mapper(componentModel = "spring")
public interface SportEventMapper {
    Sportveranstaltung toEntity(SportDTO dto);
    SportDTO toDto(Sportveranstaltung entity);
}