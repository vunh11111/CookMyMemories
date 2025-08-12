package com.example.demo.dto;

import java.util.List;
import java.util.Map;

public class RecipeFilterResponseDTO {
    private List<RecipeDetailDTO> recipes;
    private Map<String, Object> filters;
    private long total_results;

    public RecipeFilterResponseDTO(List<RecipeDetailDTO> recipes, Map<String, Object> filters, long total_results) {
        this.recipes = recipes;
        this.filters = filters;
        this.total_results = total_results;
    }

    public List<RecipeDetailDTO> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<RecipeDetailDTO> recipes) {
        this.recipes = recipes;
    }

    public Map<String, Object> getFilters() {
        return filters;
    }

    public void setFilters(Map<String, Object> filters) {
        this.filters = filters;
    }

    public long getTotal_results() {
        return total_results;
    }

    public void setTotal_results(long total_results) {
        this.total_results = total_results;
    }
}
