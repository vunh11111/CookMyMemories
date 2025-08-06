package com.example.demo.repository;

import com.example.demo.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    
    // Tìm tất cả ingredients được sắp xếp theo tên
    @Query("SELECT i FROM Ingredient i ORDER BY i.ingredients ASC")
    List<Ingredient> findAllOrderByIngredientsAsc();
    
    // Tìm tất cả ingredients được sắp xếp theo giá
    @Query("SELECT i FROM Ingredient i ORDER BY i.price ASC")
    List<Ingredient> findAllOrderByPriceAsc();
    
    // Có thể thêm các query method khác nếu cần
    List<Ingredient> findByIngredientsContainingIgnoreCase(String ingredients);
}