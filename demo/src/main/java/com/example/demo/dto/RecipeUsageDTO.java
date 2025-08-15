package com.example.demo.dto;

public class RecipeUsageDTO {
    private Long recipe_id;
    private String recipe_name;
    private String quantity;

    public RecipeUsageDTO(Long recipe_id, String recipe_name, String quantity) {
        this.recipe_id = recipe_id;
        this.recipe_name = recipe_name;
        this.quantity = quantity;
    }

    public Long getRecipe_id() {
        return recipe_id;
    }

    public void setRecipe_id(Long recipe_id) {
        this.recipe_id = recipe_id;
    }

    public String getRecipe_name() {
        return recipe_name;
    }

    public void setRecipe_name(String recipe_name) {
        this.recipe_name = recipe_name;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
