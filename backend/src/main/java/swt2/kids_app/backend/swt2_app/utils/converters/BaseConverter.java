package swt2.kids_app.backend.swt2_app.utils.converters;

public abstract class BaseConverter<B, D> {
    public final D toDto(B entity) {
        this.preToDto(entity);
        D dto = convertToDto(entity);
        this.postToDto(entity, dto);
        return dto;
    }

    public final B toEntity(D dto) {
        this.preToEntity(dto);
        B entity = this.convertToEntity(dto);
        this.postToEntity(entity, dto);
        return entity;
    }

    public abstract void preToDto(B entity);

    public abstract void preToEntity(D dto);

    public abstract B convertToEntity(D dto);

    public abstract D convertToDto(B entity);

    public abstract void postToDto(B entity, D dto);

    public abstract void postToEntity(B entity, D dto);

}
