// src/main/java/com/example/demo/dto/UserProfileUpdateRequest.java
package com.example.demo.dto;

import lombok.Data;

@Data
public class UserProfileUpdateRequest {
    private String email;
    private String country;
}
