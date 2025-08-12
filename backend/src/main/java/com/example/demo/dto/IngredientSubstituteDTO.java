package com.example.demo.dto;

import java.math.BigDecimal;

public class IngredientSubstituteDTO {
    private Long substitute_ingredient_id;
    private String name;
    private BigDecimal similarity_score;
    private String comment;

    public IngredientSubstituteDTO(Long substitute_ingredient_id, String name, BigDecimal similarity_score, String comment) {
        this.substitute_ingredient_id = substitute_ingredient_id;
        this.name = name;
        this.similarity_score = similarity_score;
        this.comment = comment;
    }

    public Long getSubstitute_ingredient_id() {
        return substitute_ingredient_id;
    }

    public void setSubstitute_ingredient_id(Long substitute_ingredient_id) {
        this.substitute_ingredient_id = substitute_ingredient_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getSimilarity_score() {
        return similarity_score;
    }

    public void setSimilarity_score(BigDecimal similarity_score) {
        this.similarity_score = similarity_score;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
