package com.example.demo.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class SearchByIngredientsRequest {
    private List<Long> ingredientIds;
    private Integer maxTime; // Thời gian tối đa (phút)
    private String cuisineType; // Loại món ăn
}