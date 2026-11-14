package swt2.kids_app.backend.swt2_app.utils.converters;

import org.springframework.stereotype.Component;

import swt2.kids_app.backend.swt2_app.business.user.User;
import swt2.kids_app.backend.swt2_app.business.user.UserDTO;

@Component
public class UserConverter extends BaseConverter<User, UserDTO> {

    private final AddressConverter addressConverter;

    public UserConverter(AddressConverter addressConverter) {
        this.addressConverter = addressConverter;
    }

    @Override
    public User convertToEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        user.setFirstname(dto.getFirstname());
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setProfileType(dto.getProfileType());
        user.setCategories(dto.getCategories());
        user.setAddress(addressConverter.convertToEntity(dto.getAddress()));
        return user;
    }

    @Override
    public UserDTO convertToDto(User entity) {
        UserDTO dto = new UserDTO();
        dto.setId(entity.getId());
        dto.setUsername(entity.getUsername());
        dto.setName(entity.getName());
        dto.setEmail(entity.getEmail());
        dto.setProfileType(entity.getProfileType());
        dto.setCategories(entity.getCategories());
        dto.setAddress(addressConverter.convertToDto(entity.getAddress()));
        return dto;
    }

    @Override
    public void preToDto(User entity) {
    }

    @Override
    public void preToEntity(UserDTO dto) {
    }

    @Override
    public void postToDto(User entity, UserDTO dto) {
    }

    @Override
    public void postToEntity(User entity, UserDTO dto) {
    }
}
