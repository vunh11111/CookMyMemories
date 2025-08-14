// // ===== 9. Global Exception Handler (GlobalExceptionHandler.java) =====
// package com.example.demo.exception;

// import com.example.demo.dto.ApiResponse;
// import lombok.extern.slf4j.Slf4j;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.ExceptionHandler;
// import org.springframework.web.bind.annotation.RestControllerAdvice;

// @RestControllerAdvice
// @Slf4j
// public class GlobalExceptionHandler {
    
//     @ExceptionHandler(ResourceNotFoundException.class)
//     public ResponseEntity<ApiResponse<Object>> handleResourceNotFoundException(ResourceNotFoundException ex) {
//         log.error("Resource not found: {}", ex.getMessage());
        
//         ApiResponse<Object> response = ApiResponse.error(ex.getMessage());
//         return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
//     }
    
//     @ExceptionHandler(Exception.class)
//     public ResponseEntity<ApiResponse<Object>> handleGeneralException(Exception ex) {
//         log.error("Internal server error: {}", ex.getMessage(), ex);
        
//         ApiResponse<Object> response = ApiResponse.error("Internal server error");
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
//     }
// }