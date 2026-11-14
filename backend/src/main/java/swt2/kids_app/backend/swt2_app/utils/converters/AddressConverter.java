package swt2.kids_app.backend.swt2_app.utils.converters;

import org.springframework.stereotype.Component;

import swt2.kids_app.backend.swt2_app.business.address.Address;
import swt2.kids_app.backend.swt2_app.business.address.AddressDTO;

@Component
public class AddressConverter extends BaseConverter<Address, AddressDTO> {

    public AddressConverter() {

    }

    @Override
    public void preToDto(Address entity) {
    }

    @Override
    public void preToEntity(AddressDTO dto) {
    }

    @Override
    public Address convertToEntity(AddressDTO dto) {
        Address address = new Address();
        address.setId(dto.getId());
        address.setHouseNumber(dto.getHouseNumber());
        address.setStreet(dto.getStreet());
        return address;
    }

    @Override
    public AddressDTO convertToDto(Address entity) {
        AddressDTO addressDTO = new AddressDTO();
        addressDTO.setId(entity.getId());
        addressDTO.setStreet(entity.getStreet());
        addressDTO.setHouseNumber(entity.getHouseNumber());
        return addressDTO;
    }

    @Override
    public void postToDto(Address entity, AddressDTO dto) {
    }

    @Override
    public void postToEntity(Address entity, AddressDTO dto) {
    }

}
