package com.example.demo.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class MissingIngredientDTO {
    private Long ingredientId;
    private String name;
    private Double quantity;
    private String unit;
    private boolean hasSubstitute;
    private List<Long> substituteOptions;

    // getters & setters
}
