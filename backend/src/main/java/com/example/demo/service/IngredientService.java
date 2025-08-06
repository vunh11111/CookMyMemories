package com.example.demo.service;

import com.example.demo.dto.IngredientDto;
import com.example.demo.entity.Ingredient;
import com.example.demo.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class IngredientService {
    
    private final IngredientRepository ingredientRepository;
    
    /**
     * Lấy tất cả ingredients
     * @return List<IngredientDto>
     */
    public List<IngredientDto> getAllIngredients() {
        log.info("Fetching all ingredients");
        
        List<Ingredient> ingredients = ingredientRepository.findAll();
        
        return ingredients.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    /**
     * Lấy tất cả ingredients được sắp xếp theo tên
     * @return List<IngredientDto>
     */
    public List<IngredientDto> getAllIngredientsOrderByName() {
        log.info("Fetching all ingredients ordered by name");
        
        List<Ingredient> ingredients = ingredientRepository.findAllOrderByIngredientsAsc();
        
        return ingredients.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    /**
     * Lấy tất cả ingredients được sắp xếp theo giá
     * @return List<IngredientDto>
     */
    public List<IngredientDto> getAllIngredientsOrderByPrice() {
        log.info("Fetching all ingredients ordered by price");
        
        List<Ingredient> ingredients = ingredientRepository.findAllOrderByPriceAsc();
        
        return ingredients.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    
    /**
     * Convert Entity to DTO
     * @param ingredient
     * @return IngredientDto
     */
    private IngredientDto convertToDto(Ingredient ingredient) {
        return new IngredientDto(
            ingredient.getIngredients(),
            ingredient.getPrice()
        );
    }
}