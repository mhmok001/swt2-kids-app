package swt2.kids_app.backend.swt2_app.mapper;

import org.mapstruct.Mapper;
import swt2.kids_app.backend.swt2_app.business.dtos.WorkshopDTO;
import swt2.kids_app.backend.swt2_app.business.event.Workshop;

@Mapper(componentModel = "spring")
public interface WorkshopEventMapper {
    Workshop toEntity(WorkshopDTO dto);
    WorkshopDTO toDto(Workshop entity);
}
