package com.example.demo.controller;

import com.example.demo.dto.IngredientDto;
import com.example.demo.service.IngredientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
public class IngredientController {
    
    private final IngredientService ingredientService;
    
    /**
     * GET /api/ingredients - Lấy tất cả ingredients
     * @return ResponseEntity<List<IngredientDto>>
     */
    @GetMapping
    public ResponseEntity<List<IngredientDto>> getAllIngredients(
            @RequestParam(value = "sortBy", required = false) String sortBy) {
        
        log.info("GET /api/ingredients - sortBy: {}", sortBy);
        
        try {
            List<IngredientDto> ingredients;
            
            if ("name".equalsIgnoreCase(sortBy)) {
                ingredients = ingredientService.getAllIngredientsOrderByName();
            } else if ("price".equalsIgnoreCase(sortBy)) {
                ingredients = ingredientService.getAllIngredientsOrderByPrice();
            } else {
                ingredients = ingredientService.getAllIngredients();
            }
            
            log.info("Successfully fetched {} ingredients", ingredients.size());
            return ResponseEntity.ok(ingredients);
            
        } catch (Exception e) {
            log.error("Error fetching ingredients: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    /**
     * Health check endpoint
     * @return ResponseEntity<String>
     */
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Ingredient service is running!");
    }
}