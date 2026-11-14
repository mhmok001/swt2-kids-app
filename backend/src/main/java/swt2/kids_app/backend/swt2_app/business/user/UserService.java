package swt2.kids_app.backend.swt2_app.business.user;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import swt2.kids_app.backend.swt2_app.utils.converters.UserConverter;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final UserConverter userConverter;

    public UserService(UserRepository userRepository, UserConverter userConverter) {
        this.userRepository = userRepository;
        this.userConverter = userConverter;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        var user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        return org.springframework.security.core.userdetails.User.builder()
                .username(username)
                .password(user.getPassword())
                .authorities(user.getProfileType().toString())
                .build();

    }

    public User getByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(UserDTO dto) {
        User user = userConverter.convertToEntity(dto);
        return userRepository.save(user);
    }

    public boolean deleteUser(UserDTO dto) {
        User user = userConverter.convertToEntity(dto);
        Optional<User> user2 = userRepository.findByEmail(user.getEmail());
        user = user2.get();
        if (user != null) {
            userRepository.delete(user);
            return true;
        }
        return false;
    }
}
