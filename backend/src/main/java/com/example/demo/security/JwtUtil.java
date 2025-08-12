package com.example.demo.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Khóa bí mật (nên lưu vào biến môi trường, ở đây chỉ để demo)
    private final Key SECRET_KEY = Keys.hmacShaKeyFor("my-super-secret-key-for-jwt-which-is-very-long".getBytes());

    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24 giờ

    // Tạo token
    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
    }

    // Lấy username từ token
    public String extractUsername(String token) {
        return parseClaims(token).getSubject();
    }

    // Lấy role từ token
    public String extractRole(String token) {
        return (String) parseClaims(token).get("role");
    }

    // Kiểm tra token hết hạn chưa
    public boolean isTokenValid(String token, String username) {
        return (username.equals(extractUsername(token)) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return parseClaims(token).getExpiration().before(new Date());
    }

    private Claims parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
