package com.example.demo.dto;

public class RecipeIngredientDetailDTO {
    private Long ingredient_id;
    private String name;
    private Double quantity;
    private String unit;
    private Boolean optional;

    public RecipeIngredientDetailDTO(Long ingredient_id, String name, Double quantity, String unit, Boolean optional) {
        this.ingredient_id = ingredient_id;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.optional = optional;
    }

    public Long getIngredient_id() { return ingredient_id; }
    public void setIngredient_id(Long ingredient_id) { this.ingredient_id = ingredient_id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Double getQuantity() { return quantity; }
    public void setQuantity(Double quantity) { this.quantity = quantity; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public Boolean getOptional() { return optional; }
    public void setOptional(Boolean optional) { this.optional = optional; }
}
