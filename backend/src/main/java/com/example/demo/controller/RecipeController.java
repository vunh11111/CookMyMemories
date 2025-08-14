package com.example.demo.controller;

import com.example.demo.dto.RecipeDetailDTO;
import com.example.demo.dto.RecipeFilterResponseDTO;
import com.example.demo.dto.RecipeListResponseDTO;
import com.example.demo.dto.RecipeSearchResultDTO;
import com.example.demo.dto.SearchByIngredientsRequest;
import com.example.demo.service.RecipeService;

// import java.util.HashMap;
import java.util.List;
// import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://192.168.1.5:5500")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public RecipeListResponseDTO getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDetailDTO> getRecipeDetail(@PathVariable Long id) {
        return ResponseEntity.ok(recipeService.getRecipeDetail(id));
    }
    // @GetMapping("/filter")
    // public ResponseEntity<RecipeFilterResponseDTO> filterRecipes(
    //         @RequestParam(required = false) String cuisine_type,
    //         @RequestParam(required = false) Integer max_time) {

    //     RecipeFilterResponseDTO response = recipeService.filterRecipes(cuisine_type, max_time);
    //     return ResponseEntity.ok(response);
    // }
    @GetMapping("/filter")
    public ResponseEntity<RecipeFilterResponseDTO> filterRecipes(
            @RequestParam(required = false) String cuisine_type,
            @RequestParam(required = false) Integer max_time,
            @RequestParam(required = false) String a_part_of_name) {

        RecipeFilterResponseDTO response = recipeService.filterRecipes(cuisine_type, max_time, a_part_of_name);
        return ResponseEntity.ok(response);
    }
    // @PostMapping("/search-by-ingredients")
    // public ResponseEntity<List<RecipeSearchResultDTO>> searchByIngredients(
    //         @RequestBody SearchByIngredientsRequest request) {

    //     List<RecipeSearchResultDTO> recipes = recipeService.searchByIngredients(request);
    //     return ResponseEntity.ok(recipes);
    // }
    @PostMapping("/search-by-ingredients")
    public ResponseEntity<List<RecipeSearchResultDTO>> searchByIngredients(
            @RequestBody SearchByIngredientsRequest request) {
        
        List<RecipeSearchResultDTO> recipes = recipeService.searchByIngredients(request);
        return ResponseEntity.ok(recipes);
    }

}
