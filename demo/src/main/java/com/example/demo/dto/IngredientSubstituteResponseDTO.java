package com.example.demo.dto;

import java.util.List;

public class IngredientSubstituteResponseDTO {
    private IngredientBasicDTO original_ingredient;
    private List<IngredientSubstituteDTO> substitutes;

    public IngredientBasicDTO getOriginal_ingredient() {
        return original_ingredient;
    }

    public void setOriginal_ingredient(IngredientBasicDTO original_ingredient) {
        this.original_ingredient = original_ingredient;
    }

    public List<IngredientSubstituteDTO> getSubstitutes() {
        return substitutes;
    }

    public void setSubstitutes(List<IngredientSubstituteDTO> substitutes) {
        this.substitutes = substitutes;
    }
}
