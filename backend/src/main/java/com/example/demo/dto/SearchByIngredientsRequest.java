package com.example.demo.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class SearchByIngredientsRequest {
    private List<Long> ingredientIds;
    private Long userId;

    // getters & setters
}
