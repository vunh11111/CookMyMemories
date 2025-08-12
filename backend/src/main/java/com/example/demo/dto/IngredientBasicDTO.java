package com.example.demo.dto;

public class IngredientBasicDTO {
    private Long ingredient_id;
    private String name;

    public IngredientBasicDTO(Long ingredient_id, String name) {
        this.ingredient_id = ingredient_id;
        this.name = name;
    }

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
}
