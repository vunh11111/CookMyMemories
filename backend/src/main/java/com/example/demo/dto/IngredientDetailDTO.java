package com.example.demo.dto;

import java.util.List;

public class IngredientDetailDTO {
    private Long ingredient_id;
    private String name;
    private String description;

    private String unit;
    private List<RecipeUsageDTO> used_in_recipes;

    // Getters và Setters
    public Long getIngredient_id() {
        return ingredient_id;
    }

    public void setIngredient_id(Long ingredient_id) {
        this.ingredient_id = ingredient_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public List<RecipeUsageDTO> getUsed_in_recipes() {
        return used_in_recipes;
    }

    public void setUsed_in_recipes(List<RecipeUsageDTO> used_in_recipes) {
        this.used_in_recipes = used_in_recipes;
    }
}