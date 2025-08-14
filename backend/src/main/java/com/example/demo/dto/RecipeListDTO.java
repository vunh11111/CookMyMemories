package com.example.demo.dto;

public class RecipeListDTO {
    private Long recipe_id;
    private String name;
    private String instructions;
    private String cuisine_type;
    private Integer time;
    private String imageurl;
    private Long ingredient_count;

    public RecipeListDTO(Long recipe_id, String name, String instructions, String cuisine_type,
                         Integer time, String imageurl, Long ingredient_count) {
        this.recipe_id = recipe_id;
        this.name = name;
        this.instructions = instructions;
        this.cuisine_type = cuisine_type;
        this.time = time;
        this.imageurl = imageurl;
        this.ingredient_count = ingredient_count;
    }

    public Long getRecipe_id() {
        return recipe_id;
    }

    public void setRecipe_id(Long recipe_id) {
        this.recipe_id = recipe_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getCuisine_type() {
        return cuisine_type;
    }

    public void setCuisine_type(String cuisine_type) {
        this.cuisine_type = cuisine_type;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public Long getIngredient_count() {
        return ingredient_count;
    }

    public void setIngredient_count(Long ingredient_count) {
        this.ingredient_count = ingredient_count;
    }
}
