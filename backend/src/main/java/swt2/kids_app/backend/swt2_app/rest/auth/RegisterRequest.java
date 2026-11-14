package swt2.kids_app.backend.swt2_app.rest.auth;

import java.util.List;

import swt2.kids_app.backend.swt2_app.business.typ.ProfileType;

public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private String firstname;
    private String name;
    private Long adressId;
    private ProfileType profileType;
    private List<Long> interestIds;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName(){
        return name;
    }

    public void setName(String nachnahme){
        this.name = nachnahme;
    }
    
    public String getFirstname(){
        return this.firstname;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public Long getAdressId(){
        return adressId;
    }

    public void setAdressId(Long adressId){
        this.adressId = adressId;
    }

    public ProfileType getProfiletype(){
        return this.profileType;
    }

    public void setprofileType(ProfileType profileType){
        this.profileType = profileType;
    }
    
    public List<Long> getInterestIds(){
        return this.interestIds;
    }

    public void setInterestsIds(List<Long> interestIds){
        this.interestIds = interestIds;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
