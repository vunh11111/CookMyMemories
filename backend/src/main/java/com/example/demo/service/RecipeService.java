package com.example.demo.service;

import com.example.demo.dto.RecipeListDTO;
import com.example.demo.dto.RecipeListResponseDTO;
import com.example.demo.dto.RecipeMatchInfoDTO;
import com.example.demo.dto.RecipeSearchResultDTO;
import com.example.demo.dto.SearchByIngredientsRequest;
import com.example.demo.dto.MissingIngredientDTO;
// import com.example.demo.dto.IngredientDetailDTO;
import com.example.demo.dto.RecipeDetailDTO;
import com.example.demo.dto.RecipeFilterResponseDTO;
import com.example.demo.dto.RecipeIngredientDetailDTO;
// import com.example.demo.dto.RecipeListDTO;
// import com.example.demo.dto.RecipeListResponseDTO;
import com.example.demo.entity.Recipe;
import com.example.demo.repository.IngredientSubstituteRepository;
// import com.example.demo.entity.RecipeIngredient;
import com.example.demo.repository.RecipeIngredientRepository;
import com.example.demo.repository.RecipeRepository;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;
    private final IngredientSubstituteRepository ingredientSubstituteRepository;

    public RecipeService(RecipeRepository recipeRepository, RecipeIngredientRepository recipeIngredientRepository, IngredientSubstituteRepository ingredientSubstituteRepository) {
        this.recipeRepository = recipeRepository;
        this.recipeIngredientRepository = recipeIngredientRepository;
        this.ingredientSubstituteRepository = ingredientSubstituteRepository;
    }
    public RecipeListResponseDTO getAllRecipes() {
        List<RecipeListDTO> recipes = recipeRepository.findAllRecipesWithIngredientCount();
        return new RecipeListResponseDTO(recipes);
    }
    public RecipeDetailDTO getRecipeDetail(Long id) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe not found"));

        // Lấy danh sách nguyên liệu trong công thức
        List<RecipeIngredientDetailDTO> ingredientDTOs = recipeIngredientRepository.findByRecipeRecipeId(id)
                .stream()
                .map(ri -> new RecipeIngredientDetailDTO(
                        ri.getIngredient().getIngredientId(),
                        ri.getIngredient().getName(),
                        ri.getQuantity(),
                        ri.getIngredient().getUnit(),
                        ri.getOptional()
                ))
                .collect(Collectors.toList());

        // Trả về DTO tổng hợp
        return new RecipeDetailDTO(
                recipe.getRecipeId(),
                recipe.getName(),
                recipe.getInstructions(),
                recipe.getImageURL(),
                recipe.getCuisineType(),
                recipe.getTime(),
                ingredientDTOs
        );
    }
     public RecipeFilterResponseDTO filterRecipes(String cuisineType, Integer maxTime) {
        List<Recipe> recipes = recipeRepository.filterRecipes(cuisineType, maxTime);

        List<RecipeDetailDTO> recipeDTOs = recipes.stream().map(recipe -> {
            List<RecipeIngredientDetailDTO> ingredientDTOs = recipeIngredientRepository.findByRecipeRecipeId(recipe.getRecipeId())
                    .stream()
                    .map(ri -> new RecipeIngredientDetailDTO(
                            ri.getIngredient().getIngredientId(),
                            ri.getIngredient().getName(),
                            ri.getQuantity(),
                            ri.getIngredient().getUnit(),
                            ri.getOptional()
                    ))
                    .collect(Collectors.toList());

            return new RecipeDetailDTO(
                    recipe.getRecipeId(),
                    recipe.getName(),
                    recipe.getInstructions(),
                    recipe.getImageURL(),
                    recipe.getCuisineType(),
                    recipe.getTime(),
                    ingredientDTOs
            );
        }).collect(Collectors.toList());

        Map<String, Object> filters = new HashMap<>();
        filters.put("cuisine_type", cuisineType);
        filters.put("max_time", maxTime);

        return new RecipeFilterResponseDTO(recipeDTOs, filters, recipeDTOs.size());
    }
    @Transactional
    public List<RecipeSearchResultDTO> searchByIngredients(SearchByIngredientsRequest request) {
        List<Recipe> recipes = recipeRepository.findRecipesByIngredients(request.getIngredientIds());

        List<RecipeSearchResultDTO> results = new ArrayList<>();
        for (Recipe recipe : recipes) {
            int totalIngredients = recipe.getRecipeIngredients().size();
            int matchedIngredients = (int) recipe.getRecipeIngredients().stream()
                    .filter(ri -> request.getIngredientIds().contains(ri.getIngredient().getIngredientId()))
                    .count();

            List<MissingIngredientDTO> missingIngredients = recipe.getRecipeIngredients().stream()
                    .filter(ri -> !request.getIngredientIds().contains(ri.getIngredient().getIngredientId()))
                    .map(ri -> {
                        MissingIngredientDTO mi = new MissingIngredientDTO();
                        mi.setIngredientId(ri.getIngredient().getIngredientId());
                        mi.setName(ri.getIngredient().getName());
                        mi.setQuantity(ri.getQuantity());
                        mi.setUnit(ri.getIngredient().getUnit());

                        // Check substitute
                        List<Long> subs = ingredientSubstituteRepository
                                .findByOriginalIngredient_IngredientId(ri.getIngredient().getIngredientId())
                                .stream()
                                .map(s -> s.getSubstituteIngredient().getIngredientId())
                                .toList();

                        mi.setHasSubstitute(!subs.isEmpty());
                        mi.setSubstituteOptions(subs);
                        return mi;
                    })
                    .toList();

            RecipeMatchInfoDTO matchInfo = new RecipeMatchInfoDTO();
            matchInfo.setTotalIngredients(totalIngredients);
            matchInfo.setMatchedIngredients(matchedIngredients);
            matchInfo.setMatchPercentage((matchedIngredients * 100.0) / totalIngredients);
            matchInfo.setMissingIngredients(missingIngredients);

            RecipeSearchResultDTO dto = new RecipeSearchResultDTO();
            dto.setRecipeId(recipe.getRecipeId());
            dto.setName(recipe.getName());
            dto.setCuisineType(recipe.getCuisineType());
            dto.setTime(recipe.getTime());
            dto.setMatchInfo(matchInfo);

            results.add(dto);
        }

        return results;
}


}
