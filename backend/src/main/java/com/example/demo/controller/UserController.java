package com.example.demo.controller;

import com.example.demo.dto.*;
import com.example.demo.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://192.168.1.5:5500")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@PreAuthorize("hasRole('USER') or hasRole('ADMIN')") //Dong nay nguy hiem
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        userService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }

    // @PostMapping("/login")
    // public ResponseEntity<String> login(@RequestBody LoginRequest request) {
    //     String token = userService.login(request);
    //     return ResponseEntity.ok(token);
    // }

    // @PostMapping("/login")
    // public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
    //     String token = userService.login(request);
    //     return ResponseEntity.ok(new LoginResponse(token));
    // }
    // @PostMapping("/login")
    // public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request) {
    //     String token = userService.login(request);
    //     return ResponseEntity.ok(Map.of("token", token)); // trả về JSON
    // }
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request) {
        String token = userService.login(request);
        return ResponseEntity.ok(Map.of("token", token)); // trả về JSON
    }

    @GetMapping("/profile")
    public ResponseEntity<UserProfileResponse> getProfile(Authentication authentication) {
        return ResponseEntity.ok(userService.getProfile(authentication.getName()));
    }

    @PutMapping("/profile")
    public ResponseEntity<String> updateProfile(Authentication authentication,
                                                @RequestBody UpdateProfileRequest request) {
        userService.updateProfile(authentication.getName(), request);
        return ResponseEntity.ok("Profile updated successfully");
    }
    // @PutMapping("/profile")
    // public ResponseEntity<?> updateProfile(Authentication auth, @RequestBody UserProfileRequest req) {
    //     User user = userRepository.findByUsername(auth.getName())
    //             .orElseThrow(() -> new RuntimeException("User not found"));

    //     if (req.getEmail() != null) user.setEmail(req.getEmail());
    //     if (req.getCountry() != null) user.setCountry(req.getCountry());

    //     userRepository.save(user);
    //     return ResponseEntity.ok("Profile updated");
    // }

    // @PutMapping("/change-password")
    // public ResponseEntity<String> changePassword(Authentication authentication,
    //                                              @RequestBody ChangePasswordRequest request) {
    //     userService.changePassword(authentication.getName(), request);
    //     return ResponseEntity.ok("Password changed successfully");
    // }
    // @PutMapping("/change-password")
    // public ResponseEntity<String> changePassword(Authentication authentication,
    //                                             @RequestBody ChangePasswordRequest request) {
    //     System.out.println("Received request oldPassword = " + request.getOldPassword2() + ", newPassword = " + request.getNewPassword2());
    //     if (request == null || request.getOldPassword2() == null || request.getNewPassword2() == null) {
    //         return ResponseEntity.badRequest().body("Old password and new password must be provided");
    //     }

    //     userService.changePassword(authentication.getName(), request);
    //     return ResponseEntity.ok("Password changed successfully");
    // }
    @PutMapping("/change-password")
    @PreAuthorize("isAuthenticated()") // Đảm bảo user đã đăng nhập
    public ResponseEntity<?> changePassword(Authentication authentication,
                                          @Valid @RequestBody ChangePasswordRequest request) {
        try {
            // Kiểm tra authentication
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body("User not authenticated");
            }

            userService.changePassword(authentication.getName(), request);
            return ResponseEntity.ok("Password changed successfully");
            
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while changing password");
        }
    }
}
