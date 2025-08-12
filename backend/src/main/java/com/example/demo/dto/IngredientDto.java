package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IngredientDTO {

    @JsonProperty("ingredient_id")
    private Long ingredientId;

    private String name;
    private String description;
    private String unit;

    public IngredientDTO(Long ingredientId, String name, String description, String unit) {
        this.ingredientId = ingredientId;
        this.name = name;
        this.description = description;
        this.unit = unit;
    }

    public Long getIngredientId() {
        return ingredientId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getUnit() {
        return unit;
    }
}
