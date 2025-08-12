package com.example.demo.repository;

import com.example.demo.entity.RecipeIngredient;
import com.example.demo.entity.RecipeIngredientKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, RecipeIngredientKey> {
    List<RecipeIngredient> findByIngredient_IngredientId(Long ingredientId);
    List<RecipeIngredient> findByRecipeRecipeId(Long recipeId);
}
