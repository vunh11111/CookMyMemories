package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeSearchResultDTO {
    private Long recipeId;
    private String name;
    private String cuisineType;
    private Integer time;
    private RecipeMatchInfoDTO matchInfo;

    // getters & setters
}
