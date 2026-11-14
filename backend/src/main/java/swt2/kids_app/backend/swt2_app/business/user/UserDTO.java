package swt2.kids_app.backend.swt2_app.business.user;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import swt2.kids_app.backend.swt2_app.business.address.AddressDTO;
import swt2.kids_app.backend.swt2_app.business.typ.Category;
import swt2.kids_app.backend.swt2_app.business.typ.ProfileType;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDTO {
    private Long id;
    private String username;
    private String firstname;
    private String name;
    private String email;
    private ProfileType profileType;

    private List<Category> categories;
    private AddressDTO address;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ProfileType getProfileType() {
        return profileType;
    }

    public void setProfileType(ProfileType profileType) {
        this.profileType = profileType;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public AddressDTO getAddress() {
        return address;
    }

    public void setAddress(AddressDTO address) {
        this.address = address;
    }

}
