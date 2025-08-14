package com.example.demo.dto;

// import lombok.*;

// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// public class ChangePasswordRequest {
//     private String oldPassword2;
//     private String newPassword2;
// }

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChangePasswordRequest {
    
    private String oldPassword2;
    private String newPassword2;
    
    @JsonCreator
    public ChangePasswordRequest(@JsonProperty("oldPassword2") String oldPassword2,
                                @JsonProperty("newPassword2") String newPassword2) {
        this.oldPassword2 = oldPassword2;
        this.newPassword2 = newPassword2;
    }
    
    @Override
    public String toString() {
        return "ChangePasswordRequest{" +
                "oldPassword2='" + (oldPassword2 != null ? "***" : "null") + '\'' +
                ", newPassword2='" + (newPassword2 != null ? "***" : "null") + '\'' +
                '}';
    }
}
