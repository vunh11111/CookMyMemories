// package com.example.demo.service;

// import com.example.demo.entity.User;
// import com.example.demo.repository.UserRepository;
// import com.example.demo.security.JwtUtil;
// import lombok.RequiredArgsConstructor;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// @Service
// @RequiredArgsConstructor
// public class AuthService {

//     private final AuthenticationManager authenticationManager;
//     private final UserRepository userRepository;
//     private final JwtUtil jwtUtil;
//     private final PasswordEncoder passwordEncoder;

//     public String login(String username, String password) {
//         // Xác thực tài khoản
//         Authentication authentication = authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(username, password)
//         );

//         // Lấy thông tin user
//         UserDetails userDetails = (UserDetails) authentication.getPrincipal();

//         // Tạo token JWT
//         return jwtUtil.generateToken(userDetails.getUsername());
//     }

//     public void register(String username, String email, String password, String country) {
//         if (userRepository.findByUsername(username).isPresent()) {
//             throw new RuntimeException("Username already exists");
//         }
//         if (userRepository.findByEmail(email).isPresent()) {
//             throw new RuntimeException("Email already exists");
//         }

//         User newUser = new User();
//         newUser.setUsername(username);
//         newUser.setEmail(email);
//         newUser.setPassword(passwordEncoder.encode(password));
//         newUser.setCountry(country);

//         userRepository.save(newUser);
//     }
// }
