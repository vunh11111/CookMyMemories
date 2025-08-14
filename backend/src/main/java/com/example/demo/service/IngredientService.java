package com.example.demo.service;

import com.example.demo.dto.IngredientDetailDTO;
import com.example.demo.dto.IngredientSubstituteDTO;
import com.example.demo.dto.IngredientSubstituteResponseDTO;
import com.example.demo.dto.RecipeUsageDTO;
import com.example.demo.dto.IngredientBasicDTO;
import com.example.demo.dto.IngredientDTO;
import com.example.demo.entity.Ingredient;
// import com.example.demo.entity.RecipeIngredient;
// import com.example.demo.entity.IngredientSubstitute;
import com.example.demo.repository.IngredientRepository;
import com.example.demo.repository.IngredientSubstituteRepository;
import com.example.demo.repository.RecipeIngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IngredientService {

    private final IngredientRepository ingredientRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;
    private final IngredientSubstituteRepository substituteRepository;


    public IngredientService(IngredientRepository ingredientRepository, RecipeIngredientRepository recipeIngredientRepository, IngredientSubstituteRepository substituteRepository) {
        this.ingredientRepository = ingredientRepository;
        this.recipeIngredientRepository = recipeIngredientRepository;
        this.substituteRepository = substituteRepository;
    }

    public List<IngredientDTO> getAllIngredients() {
        return ingredientRepository.findAll()
                .stream()
                .map(ingredient -> new IngredientDTO(
                        ingredient.getIngredientId(),
                        ingredient.getName(),
                        ingredient.getDescription(),
                        ingredient.getUnit()
                ))
                .collect(Collectors.toList());
    }
    public IngredientDetailDTO getIngredientDetail(Long id) {
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingredient not found"));

        List<RecipeUsageDTO> usedInRecipes = recipeIngredientRepository.findByIngredient_IngredientId(id)
                .stream()
                .map(ri -> new RecipeUsageDTO(
                        ri.getRecipe().getRecipeId(),
                        ri.getRecipe().getName(),
                        ri.getQuantity()
                ))
                .collect(Collectors.toList());

        IngredientDetailDTO dto = new IngredientDetailDTO();
        dto.setIngredient_id(ingredient.getIngredientId());
        dto.setName(ingredient.getName());
        dto.setDescription(ingredient.getDescription());
        dto.setUnit(ingredient.getUnit());
        dto.setUsed_in_recipes(usedInRecipes);

        return dto;
    }
    public IngredientSubstituteResponseDTO getIngredientSubstitutes(Long ingredientId) {
        Ingredient original = ingredientRepository.findById(ingredientId)
                .orElseThrow(() -> new RuntimeException("Ingredient not found"));

        List<IngredientSubstituteDTO> substituteList = substituteRepository
                .findByOriginalIngredient_IngredientId(ingredientId)
                .stream()
                .map(sub -> new IngredientSubstituteDTO(
                        sub.getSubstituteIngredient().getIngredientId(),
                        sub.getSubstituteIngredient().getName(),
                        sub.getSimilarityScore(),
                        sub.getComment()
                ))
                .collect(Collectors.toList());

        IngredientSubstituteResponseDTO response = new IngredientSubstituteResponseDTO();
        response.setOriginal_ingredient(new IngredientBasicDTO(original.getIngredientId(), original.getName()));
        response.setSubstitutes(substituteList);

        return response;
    }
}