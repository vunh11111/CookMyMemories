package com.example.demo.repository;

import com.example.demo.entity.IngredientSubstitute;
import com.example.demo.entity.IngredientSubstituteKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientSubstituteRepository extends JpaRepository<IngredientSubstitute, IngredientSubstituteKey> {
    List<IngredientSubstitute> findByOriginalIngredient_IngredientId(Long originalIngredientId);

}
