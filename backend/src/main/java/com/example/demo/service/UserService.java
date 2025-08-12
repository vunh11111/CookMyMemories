package com.example.demo.service;

import com.example.demo.dto.*;

public interface UserService {
    void register(RegisterRequest request);
    String login(LoginRequest request);
    UserProfileResponse getProfile(String username);
    void updateProfile(String username, UpdateProfileRequest request);
    void changePassword(String username, ChangePasswordRequest request);
}
