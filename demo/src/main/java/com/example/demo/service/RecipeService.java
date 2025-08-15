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
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
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
//      public RecipeFilterResponseDTO filterRecipes(String cuisineType, Integer maxTime) {
//         List<Recipe> recipes = recipeRepository.filterRecipes(cuisineType, maxTime);

//         List<RecipeDetailDTO> recipeDTOs = recipes.stream().map(recipe -> {
//             List<RecipeIngredientDetailDTO> ingredientDTOs = recipeIngredientRepository.findByRecipeRecipeId(recipe.getRecipeId())
//                     .stream()
//                     .map(ri -> new RecipeIngredientDetailDTO(
//                             ri.getIngredient().getIngredientId(),
//                             ri.getIngredient().getName(),
//                             ri.getQuantity(),
//                             ri.getIngredient().getUnit(),
//                             ri.getOptional()
//                     ))
//                     .collect(Collectors.toList());

//             return new RecipeDetailDTO(
//                     recipe.getRecipeId(),
//                     recipe.getName(),
//                     recipe.getInstructions(),
//                     recipe.getImageURL(),
//                     recipe.getCuisineType(),
//                     recipe.getTime(),
//                     ingredientDTOs
//             );
//         }).collect(Collectors.toList());

//         Map<String, Object> filters = new HashMap<>();
//         filters.put("cuisine_type", cuisineType);
//         filters.put("max_time", maxTime);

//         return new RecipeFilterResponseDTO(recipeDTOs, filters, recipeDTOs.size());
//     }
        
        public RecipeFilterResponseDTO filterRecipes(String cuisineType, Integer maxTime, String aPartOfName) {
        List<Recipe> recipes = recipeRepository.filterRecipes(cuisineType, maxTime, aPartOfName);

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
        filters.put("a_part_of_name", aPartOfName);

        return new RecipeFilterResponseDTO(recipeDTOs, filters, recipeDTOs.size());
        }
//         @Transactional
//         public List<RecipeSearchResultDTO> searchByIngredients(SearchByIngredientsRequest request) {
//         // Tìm recipes với điều kiện lọc theo time và cuisine_type
//         List<Recipe> recipes = recipeRepository.findRecipesByIngredientsAndFilters(
//                 request.getIngredientIds(),
//                 request.getMaxTime(),
//                 request.getCuisineType()
//         );

//         List<RecipeSearchResultDTO> results = new ArrayList<>();
        
//         for (Recipe recipe : recipes) {
//             int totalIngredients = recipe.getRecipeIngredients().size();
//             int matchedIngredients = (int) recipe.getRecipeIngredients().stream()
//                     .filter(ri -> request.getIngredientIds().contains(ri.getIngredient().getIngredientId()))
//                     .count();

//             List<MissingIngredientDTO> missingIngredients = recipe.getRecipeIngredients().stream()
//                     .filter(ri -> !request.getIngredientIds().contains(ri.getIngredient().getIngredientId()))
//                     .map(ri -> {
//                         MissingIngredientDTO mi = new MissingIngredientDTO();
//                         mi.setIngredientId(ri.getIngredient().getIngredientId());
//                         mi.setName(ri.getIngredient().getName());
//                         mi.setQuantity(ri.getQuantity());
//                         mi.setUnit(ri.getIngredient().getUnit());

//                         // Check substitute
//                         List<Long> subs = ingredientSubstituteRepository
//                                 .findByOriginalIngredient_IngredientId(ri.getIngredient().getIngredientId())
//                                 .stream()
//                                 .map(s -> s.getSubstituteIngredient().getIngredientId())
//                                 .toList();

//                         mi.setHasSubstitute(!subs.isEmpty());
//                         mi.setSubstituteOptions(subs);
//                         return mi;
//                     })
//                     .toList();

//             RecipeMatchInfoDTO matchInfo = new RecipeMatchInfoDTO();
//             matchInfo.setTotalIngredients(totalIngredients);
//             matchInfo.setMatchedIngredients(matchedIngredients);
//             matchInfo.setMatchPercentage((matchedIngredients * 100.0) / totalIngredients);
//             matchInfo.setMissingIngredients(missingIngredients);

//             RecipeSearchResultDTO dto = new RecipeSearchResultDTO();
//             dto.setRecipeId(recipe.getRecipeId());
//             dto.setName(recipe.getName());
//             dto.setCuisineType(recipe.getCuisineType());
//             dto.setTime(recipe.getTime());
//             dto.setMatchInfo(matchInfo);

//             results.add(dto);
//         }

//         // Sắp xếp theo match percentage giảm dần, sau đó theo thời gian nấu tăng dần
//         results.sort((a, b) -> {
//             int percentageCompare = Double.compare(
//                     b.getMatchInfo().getMatchPercentage(), 
//                     a.getMatchInfo().getMatchPercentage()
//             );
//             if (percentageCompare != 0) {
//                 return percentageCompare;
//             }
//             return Integer.compare(a.getTime(), b.getTime());
//         });

//         return results;
//     }
        @Transactional
        public List<RecipeSearchResultDTO> searchByIngredients(SearchByIngredientsRequest request) {
        // Tìm tất cả recipes với điều kiện lọc theo time và cuisine_type
        // Không lọc theo ingredients ở đây, sẽ lọc trong Java logic
        List<Recipe> allRecipes = recipeRepository.findRecipesByFilters(
                request.getMaxTime(),
                request.getCuisineType()
        );

        List<RecipeSearchResultDTO> results = new ArrayList<>();
        Set<Long> userSelectedIngredients = new HashSet<>(request.getIngredientIds());
        
        for (Recipe recipe : allRecipes) {
                // Lấy tất cả ingredient IDs của recipe này
                Set<Long> recipeIngredientIds = recipe.getRecipeIngredients().stream()
                        .map(ri -> ri.getIngredient().getIngredientId())
                        .collect(Collectors.toSet());
                
                // Tính số nguyên liệu trùng khớp
                Set<Long> matchedIngredientIds = new HashSet<>(userSelectedIngredients);
                matchedIngredientIds.retainAll(recipeIngredientIds); // Intersection
                
                int matchedIngredients = matchedIngredientIds.size();
                
                // Chỉ thêm recipe nếu có ít nhất 1 nguyên liệu trùng khớp
                if (matchedIngredients > 0) {
                // int totalUserIngredients = request.getIngredientIds().size();
                int totalRecipeIngredients = recipe.getRecipeIngredients().size();
                
                // Tính missing ingredients (nguyên liệu recipe cần nhưng user không có)
                List<MissingIngredientDTO> missingIngredients = recipe.getRecipeIngredients().stream()
                        .filter(ri -> !userSelectedIngredients.contains(ri.getIngredient().getIngredientId()))
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
                matchInfo.setTotalIngredients(totalRecipeIngredients);
                matchInfo.setMatchedIngredients(matchedIngredients);
                
                // Tính match percentage dựa trên recipe ingredients (bao nhiêu % recipe được đáp ứng)
                matchInfo.setMatchPercentage((matchedIngredients * 100.0) / totalRecipeIngredients);
                matchInfo.setMissingIngredients(missingIngredients);

                // Thêm thông tin user coverage (bao nhiêu % nguyên liệu user chọn được sử dụng)
                // double userCoveragePercentage = (matchedIngredients * 100.0) / totalUserIngredients;

                RecipeSearchResultDTO dto = new RecipeSearchResultDTO();
                dto.setRecipeId(recipe.getRecipeId());
                dto.setName(recipe.getName());
                dto.setCuisineType(recipe.getCuisineType());
                dto.setTime(recipe.getTime());
                dto.setMatchInfo(matchInfo);
                // Có thể thêm userCoveragePercentage vào DTO nếu cần

                results.add(dto);
                }
        }

        // Sắp xếp theo match percentage giảm dần, sau đó theo thời gian nấu tăng dần
        results.sort((a, b) -> {
                int percentageCompare = Double.compare(
                        b.getMatchInfo().getMatchPercentage(), 
                        a.getMatchInfo().getMatchPercentage()
                );
                if (percentageCompare != 0) {
                return percentageCompare;
                }
                return Integer.compare(a.getTime(), b.getTime());
        });

        return results;
        }
}
