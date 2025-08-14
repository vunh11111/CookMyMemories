package com.example.demo.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_id")
    private Long recipeId;

    // @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "recipe_seq")
    // @SequenceGenerator(name = "recipe_seq", sequenceName = "recipe_sequence")
    // @Column(name = "recipe_id")
    // private Long recipeId;

    @Column(name = "name")
    private String name;

    @Column(name = "instructions", columnDefinition = "TEXT")
    private String instructions;

    @Column(name = "imageurl")
    private String imageURL;

    @Column(name = "cuisine_type")
    private String cuisineType;

    @Column(name = "time")
    private Integer time = 0;

    @OneToMany(mappedBy = "recipe")
    private List<RecipeIngredient> recipeIngredients;

    // Getters và Setters
    public Long getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
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

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getCuisineType() {
        return cuisineType;
    }

    public void setCuisineType(String cuisineType) {
        this.cuisineType = cuisineType;
    }

    // public Integer getTime() {
    //     return time;
    // }
    public Integer getTime() {
        return time != null ? time : 0; // Trả về 0 nếu null
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public List<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredients;
    }

    public void setRecipeIngredients(List<RecipeIngredient> recipeIngredients) {
        this.recipeIngredients = recipeIngredients;
    }
}
