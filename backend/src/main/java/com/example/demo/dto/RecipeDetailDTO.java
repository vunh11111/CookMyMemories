package com.example.demo.dto;

import java.util.List;

public class RecipeDetailDTO {
    private Long recipe_id;
    private String name;
    private String instructions;
    private String imageurl;
    private String cuisine_type;
    private int time;
    private List<RecipeIngredientDetailDTO> ingredients;

    public RecipeDetailDTO(Long recipe_id, String name, String instructions, String imageurl,
                           String cuisine_type, int time, List<RecipeIngredientDetailDTO> ingredients) {
        this.recipe_id = recipe_id;
        this.name = name;
        this.instructions = instructions;
        this.imageurl = imageurl;
        this.cuisine_type = cuisine_type;
        this.time = time;
        this.ingredients = ingredients;
    }

    // Getters & setters
    public Long getRecipe_id() { return recipe_id; }
    public void setRecipe_id(Long recipe_id) { this.recipe_id = recipe_id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getInstructions() { return instructions; }
    public void setInstructions(String instructions) { this.instructions = instructions; }
    public String getImageurl() { return imageurl; }
    public void setImageurl(String imageurl) { this.imageurl = imageurl; }
    public String getCuisine_type() { return cuisine_type; }
    public void setCuisine_type(String cuisine_type) { this.cuisine_type = cuisine_type; }
    public int getTime() { return time; }
    public void setTime(int time) { this.time = time; }
    public List<RecipeIngredientDetailDTO> getIngredients() { return ingredients; }
    public void setIngredients(List<RecipeIngredientDetailDTO> ingredients) { this.ingredients = ingredients; }
}
