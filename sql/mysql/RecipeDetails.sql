-- Tạo view để xem thông tin chi tiết các công thức
CREATE VIEW RecipeDetails AS
SELECT 
    r.recipe_id,
    r.name AS RecipeName,
    r.cuisine_type,
    r.time,
    GROUP_CONCAT(
        CONCAT(i.name, ' (', ri.quantity, ' ', i.Unit, 
               CASE WHEN ri.optional = 1 THEN ' - optional' ELSE '' END, ')')
        SEPARATOR ', '
    ) AS Ingredients
FROM Recipes r
LEFT JOIN recipe_ingredients ri ON r.recipe_id = ri.recipe_id
LEFT JOIN ingredients i ON ri.ingredient_id= i.ingredient_id
GROUP BY r.recipe_id, r.name, r.cuisine_type, r.time;
