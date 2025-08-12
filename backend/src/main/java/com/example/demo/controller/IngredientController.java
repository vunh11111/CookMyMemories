package com.example.demo.controller;

import com.example.demo.dto.IngredientDTO;
import com.example.demo.service.IngredientService;
import com.example.demo.dto.IngredientDetailDTO;
import com.example.demo.dto.IngredientSubstituteResponseDTO;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {

    private final IngredientService ingredientService;

    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @GetMapping
    public List<IngredientDTO> getAllIngredients() {
        return ingredientService.getAllIngredients();
    }

    @GetMapping("/{id}")
    public IngredientDetailDTO getIngredientDetail(@PathVariable Long id) {
        return ingredientService.getIngredientDetail(id);
    }
    @GetMapping("/substitutes/{ingredientId}")
    public IngredientSubstituteResponseDTO getIngredientSubstitutes(@PathVariable Long ingredientId) {
        return ingredientService.getIngredientSubstitutes(ingredientId);
    }
}
