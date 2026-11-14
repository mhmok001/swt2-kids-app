package swt2.kids_app.backend.swt2_app.rest.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import swt2.kids_app.backend.swt2_app.business.typ.ProfileType;
import swt2.kids_app.backend.swt2_app.business.user.User;
import swt2.kids_app.backend.swt2_app.business.user.UserRepository;
import swt2.kids_app.backend.swt2_app.utils.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, UserRepository userRepository,
            PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            String jwt = jwtUtil.generateToken(userDetails);

            return ResponseEntity.ok(new AuthResponse(jwt));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Ungültige Zugangsdaten");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Benutzername existiert bereits");
        }
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email ist bereits vergeben.");
        }
        if (registerRequest.getPassword().length() < 8) {
            return ResponseEntity.badRequest().body("Passwort muss 8 Zeichen haben");
        }
        if (registerRequest.getUsername() == null || registerRequest.getEmail() == null
                || registerRequest.getEmail() == null) {
            return ResponseEntity.badRequest().body("Pflichfelder müssen ausgefüllt sein");
        }

        String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(encodedPassword);
        user.setEmail(registerRequest.getEmail());
        user.setProfileType(ProfileType.USER);
        user.setFirstname(registerRequest.getFirstname());
        user.setName(registerRequest.getName());
        userRepository.save(user);

        return ResponseEntity.ok("Benutzer erfolgreich registriert");
    }

}
