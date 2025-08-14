// package com.example.demo.security;

// import com.example.demo.entity.User;
// import com.example.demo.repository.UserRepository;
// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import lombok.RequiredArgsConstructor;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.List;

// @Component
// @RequiredArgsConstructor
// public class JwtAuthenticationFilter extends OncePerRequestFilter {

//     private final JwtUtil jwtUtil;
//     private final UserRepository userRepository;

//     @Override
//     protected void doFilterInternal(HttpServletRequest request,
//                                     HttpServletResponse response,
//                                     FilterChain filterChain) throws ServletException, IOException {

//         String authHeader = request.getHeader("Authorization");

//         if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//             filterChain.doFilter(request, response);
//             return;
//         }

//         String token = authHeader.substring(7);
//         String username = jwtUtil.extractUsername(token);

//         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//             User user = userRepository.findByUsername(username).orElse(null);

//             if (user != null && jwtUtil.isTokenValid(token, username)) {
//                 UsernamePasswordAuthenticationToken authToken =
//                         new UsernamePasswordAuthenticationToken(
//                                 username,
//                                 null,
//                                 List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
//                         );
//                 SecurityContextHolder.getContext().setAuthentication(authToken);
//             }
//         }

//         filterChain.doFilter(request, response);
//     }
// }

package com.example.demo.security;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String path = request.getServletPath();
        // Bỏ qua xác thực cho các endpoint public
        if (path.startsWith("/api/users/register") ||
            path.startsWith("/api/users/login") ||
            path.startsWith("/api/recipes")) {
            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtUtil.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            User user = userRepository.findByUsername(username).orElse(null);

            if (user != null && jwtUtil.isTokenValid(token, username)) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                username,
                                null,
                                List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
                        );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}
