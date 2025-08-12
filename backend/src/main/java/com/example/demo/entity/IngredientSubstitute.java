package com.example.demo.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "ingredient_substitutes")
public class IngredientSubstitute {

    @EmbeddedId
    private IngredientSubstituteKey id;

    @ManyToOne
    @MapsId("originalIngredientId")
    @JoinColumn(name = "original_ingredient_id")
    private Ingredient originalIngredient;

    @ManyToOne
    @MapsId("substituteIngredientId")
    @JoinColumn(name = "substitute_ingredient_id")
    private Ingredient substituteIngredient;

    @Column(name = "similarity_score", precision = 3, scale = 2)
    private BigDecimal similarityScore;

    @Column(columnDefinition = "TEXT")
    private String comment;

    // Getters & Setters
    public IngredientSubstituteKey getId() {
        return id;
    }

    public void setId(IngredientSubstituteKey id) {
        this.id = id;
    }

    public Ingredient getOriginalIngredient() {
        return originalIngredient;
    }

    public void setOriginalIngredient(Ingredient originalIngredient) {
        this.originalIngredient = originalIngredient;
    }

    public Ingredient getSubstituteIngredient() {
        return substituteIngredient;
    }

    public void setSubstituteIngredient(Ingredient substituteIngredient) {
        this.substituteIngredient = substituteIngredient;
    }

    public BigDecimal getSimilarityScore() {
        return similarityScore;
    }

    public void setSimilarityScore(BigDecimal similarityScore) {
        this.similarityScore = similarityScore;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
