package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
// import com.example.demo.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    public void register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .country(request.getCountry())
                .role(User.Role.USER)
                .build();

        userRepository.save(user);
    }

    @Override
    public String login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        return jwtUtil.generateToken(user.getUsername(), user.getRole().name());
    }

    @Override
    public UserProfileResponse getProfile(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return UserProfileResponse.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .email(user.getEmail())
                .country(user.getCountry())
                .role(user.getRole().name())
                .build();
    }

    @Override
    public void updateProfile(String username, UpdateProfileRequest request) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setEmail(request.getEmail());
        user.setCountry(request.getCountry());

        userRepository.save(user);
    }

    // @Override
    // public void changePassword(String username, ChangePasswordRequest request) {
    //     if (request == null || request.getOldPassword2() == null || request.getNewPassword2() == null) {
    //         throw new IllegalArgumentException("Old password and new password must be provided");
    //     }

    //     User user = userRepository.findByUsername(username)
    //             .orElseThrow(() -> new RuntimeException("User not found"));

    //     if (!passwordEncoder.matches(request.getOldPassword2(), user.getPassword())) {
    //         throw new RuntimeException("Old password is incorrect");
    //     }

    //     user.setPassword(passwordEncoder.encode(request.getNewPassword2()));
    //     userRepository.save(user);
    // }
    @Override
    @Transactional
    public void changePassword(String username, ChangePasswordRequest request) {
        // Validate input
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty");
        }
        
        if (request == null || request.getOldPassword2() == null || request.getNewPassword2() == null) {
            throw new IllegalArgumentException("Old password and new password must be provided");
        }

        // Validate new password strength
        if (request.getNewPassword2().length() < 6) {
            throw new IllegalArgumentException("New password must be at least 6 characters long");
        }

        // Find user
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found with username: " + username));

        // Verify old password
        if (!passwordEncoder.matches(request.getOldPassword2(), user.getPassword())) {
            throw new RuntimeException("Current password is incorrect");
        }

        // Check if new password is different from old password
        if (passwordEncoder.matches(request.getNewPassword2(), user.getPassword())) {
            throw new IllegalArgumentException("New password must be different from current password");
        }

        // Update password
        user.setPassword(passwordEncoder.encode(request.getNewPassword2()));
        userRepository.save(user);
    }
}
