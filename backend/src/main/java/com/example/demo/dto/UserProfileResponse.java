// src/main/java/com/example/demo/dto/UserProfileResponse.java
package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileResponse {
    private Long userId;
    private String username;
    private String email;
    private String country;
    private String role;
}
