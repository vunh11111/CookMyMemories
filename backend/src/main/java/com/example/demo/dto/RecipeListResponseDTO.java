package com.example.demo.dto;

import java.util.List;

public class RecipeListResponseDTO {
    private List<RecipeListDTO> recipes;

    public RecipeListResponseDTO(List<RecipeListDTO> recipes) {
        this.recipes = recipes;
    }

    public List<RecipeListDTO> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<RecipeListDTO> recipes) {
        this.recipes = recipes;
    }
}
