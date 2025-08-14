package com.example.demo.dto;

// import java.math.BigDecimal;

public class IngredientSubstituteDTO {
    private Long substitute_ingredient_id;
    private String name;
    private Integer similarity_score;
    private Integer comment;

    public IngredientSubstituteDTO(Long substitute_ingredient_id, String name, Integer similarity_score, Integer comment) {
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

    public Integer getSimilarity_score() {
        return similarity_score;
    }

    public void setSimilarity_score(Integer similarity_score) {
        this.similarity_score = similarity_score;
    }

    public Integer getComment() {
        return comment;
    }

    public void setComment(Integer comment) {
        this.comment = comment;
    }
}
