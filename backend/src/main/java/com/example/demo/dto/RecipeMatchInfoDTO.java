package com.example.demo.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class RecipeMatchInfoDTO {
    private int totalIngredients;
    private int matchedIngredients;
    private double matchPercentage;
    private List<MissingIngredientDTO> missingIngredients;

    // getters & setters

}
