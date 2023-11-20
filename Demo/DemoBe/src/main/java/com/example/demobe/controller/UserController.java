package com.example.demobe.controller;

import com.example.demobe.Security.CustomUserDetails;
import com.example.demobe.jwt.JwtTokenProvider;
import com.example.demobe.model.ERole;
import com.example.demobe.model.Roles;
import com.example.demobe.model.Users;
import com.example.demobe.payload.request.LoginRequest;
import com.example.demobe.payload.request.SignupRequest;
import com.example.demobe.payload.response.JwtResponse;
import com.example.demobe.payload.response.MessageResponse;
import com.example.demobe.service.RoleService;
import com.example.demobe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/auth")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
        if (userService.existsByUserName(signupRequest.getUserName())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: UserName is already "));
        }
        if (userService.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already"));
        }
        Users users = new Users();
        users.setUserName(signupRequest.getUserName());
        users.setPassword(encoder.encode(signupRequest.getPassword()));
        users.setEmail(signupRequest.getEmail());
        users.setPhone(signupRequest.getPhone());
        users.setCreated(LocalDate.now());
        users.setUserStatus(true);
        Set<String> strRoles = signupRequest.getListRoles();
        Set<Roles> listRole = new HashSet<>();
        if (strRoles == null) {
            //User quyen mac dinh
            Roles userRole = roleService.findByRoleName(ERole.ROLE_USER).orElseThrow(() -> new RuntimeException("Error: Role is not found"));
            listRole.add(userRole);
        }else {
            strRoles.forEach(role ->{
                switch (role){
                    case "admin":
                        Roles adminRole = roleService.findByRoleName(ERole.ROLE_ADMIN)
                                .orElseThrow(()-> new RuntimeException("Error: Role is not fond"));
                        listRole.add(adminRole);
                    case "moderator":
                        Roles modRole = roleService.findByRoleName(ERole.ROLE_MODERATOR)
                                .orElseThrow(()-> new RuntimeException("Error: Role is not found"));
                        listRole.add(modRole);
                    case "user":
                        Roles userRole = roleService.findByRoleName(ERole.ROLE_USER)
                                .orElseThrow(()-> new RuntimeException("Error: Role is not found"));
                        listRole.add(userRole);

                }
            });
        }
        users.setListRoles(listRole);
        userService.saveOrUpdate(users);
        return ResponseEntity.ok(new MessageResponse("User registered Successfully"));
    }
@PostMapping("/signin")
    public ResponseEntity<?>loginUser(@RequestBody LoginRequest loginRequest){
    Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getUserName(),loginRequest.getPassword())
    );
    SecurityContextHolder.getContext().setAuthentication(authentication);
    CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
    String jwt = jwtTokenProvider.generateToken(customUserDetails);
    List<String>listRoles = customUserDetails.getAuthorities().stream()
            .map(item ->item.getAuthority()).collect(Collectors.toList());
    return ResponseEntity.ok(new JwtResponse(jwt,customUserDetails.getUsername(),customUserDetails.getEmail(),
            customUserDetails.getPhone(), listRoles, customUserDetails.getUserId()));
}

}
