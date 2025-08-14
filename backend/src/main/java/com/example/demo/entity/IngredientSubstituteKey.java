package com.example.demo.entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class IngredientSubstituteKey implements Serializable {
    private Long originalIngredientId;
    private Long substituteIngredientId;

    // Getters & Setters
    public Long getOriginalIngredientId() {
        return originalIngredientId;
    }

    public void setOriginalIngredientId(Long originalIngredientId) {
        this.originalIngredientId = originalIngredientId;
    }

    public Long getSubstituteIngredientId() {
        return substituteIngredientId;
    }

    public void setSubstituteIngredientId(Long substituteIngredientId) {
        this.substituteIngredientId = substituteIngredientId;
    }

    // equals & hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof IngredientSubstituteKey)) return false;
        IngredientSubstituteKey that = (IngredientSubstituteKey) o;
        return Objects.equals(originalIngredientId, that.originalIngredientId) &&
               Objects.equals(substituteIngredientId, that.substituteIngredientId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(originalIngredientId, substituteIngredientId);
    }
}
