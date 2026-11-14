package swt2.kids_app.backend.swt2_app.mapper;

import org.mapstruct.Mapper;
import swt2.kids_app.backend.swt2_app.business.dtos.KulturveranstalltungDTO;
import swt2.kids_app.backend.swt2_app.business.event.Kulturveranstaltung;

@Mapper(componentModel = "spring")
public interface KulturEventMapper {
    Kulturveranstaltung toEntity(KulturveranstalltungDTO dto);
    KulturveranstalltungDTO toDto(Kulturveranstaltung entity);
}
