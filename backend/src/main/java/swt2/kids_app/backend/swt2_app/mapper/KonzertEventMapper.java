package swt2.kids_app.backend.swt2_app.mapper;

import org.mapstruct.Mapper;
import swt2.kids_app.backend.swt2_app.business.dtos.KonzertDTO;
import swt2.kids_app.backend.swt2_app.business.event.Konzert;

@Mapper(componentModel = "spring")
public interface KonzertEventMapper {
    Konzert toEntity(KonzertDTO dto);
    KonzertDTO toDto(Konzert entity);
}
