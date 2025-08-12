package com.example.demo.repository;

import com.example.demo.dto.RecipeListDTO;
import com.example.demo.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    @Query("SELECT new com.example.demo.dto.RecipeListDTO( " +
            "r.recipeId, r.name, r.instructions, r.cuisineType, r.time, r.imageURL, COUNT(ri.ingredient.ingredientId) ) " +
            "FROM Recipe r " +
            "LEFT JOIN r.recipeIngredients ri " +
            "GROUP BY r.recipeId, r.name, r.instructions, r.cuisineType, r.time, r.imageURL")
    List<RecipeListDTO> findAllRecipesWithIngredientCount();

    @Query("SELECT r FROM Recipe r " +
           "WHERE (:cuisineType IS NULL OR r.cuisineType = :cuisineType) " +
           "AND (:maxTime IS NULL OR r.time <= :maxTime)")
    List<Recipe> filterRecipes(@Param("cuisineType") String cuisineType,
                               @Param("maxTime") Integer maxTime);

    @Query("SELECT DISTINCT r FROM Recipe r JOIN r.recipeIngredients ri " +
       "WHERE ri.ingredient.id IN :ingredientIds")
    List<Recipe> findRecipesByIngredients(@Param("ingredientIds") List<Long> ingredientIds);                           
}
