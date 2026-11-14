package swt2.kids_app.backend.swt2_app.rest.business;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import swt2.kids_app.backend.swt2_app.business.user.User;
import swt2.kids_app.backend.swt2_app.business.user.UserDTO;
import swt2.kids_app.backend.swt2_app.business.user.UserService;
import swt2.kids_app.backend.swt2_app.rest.auth.AuthResponse;
import swt2.kids_app.backend.swt2_app.rest.auth.TokenBlacklist;
import swt2.kids_app.backend.swt2_app.utils.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @Autowired
    private TokenBlacklist tokenBlacklist;

    @Autowired
    private JwtUtil jwtUtil;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody UserDTO entity) {
        return new ResponseEntity<>(userService.updateUser(entity), HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String jwt = authHeader.substring(7);
            tokenBlacklist.blacklist(jwt, jwtUtil.extractExpiration(jwt).toInstant());
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/refresh/token")
    public ResponseEntity<AuthResponse> postMethodName(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String jwt = authHeader.substring(7);
            String username = jwtUtil.extractUsername(jwt);
            UserDetails user = userService.loadUserByUsername(username);
            String tokenNew = jwtUtil.generateToken(user);
            tokenBlacklist.blacklist(jwt, jwtUtil.extractExpiration(jwt).toInstant());
            return ResponseEntity.ok(new AuthResponse(tokenNew));
        }
        return ResponseEntity.badRequest().build();
    }

}
