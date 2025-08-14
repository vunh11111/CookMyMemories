let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"cooking","result");

//main title
mainTitleFn(main,"result");

//result container
let resultDiv = document.createElement("div");
resultDiv.classList.add("result");
main.appendChild(resultDiv);

// Function to fetch ingredient details by ID
async function fetchIngredientById(ingredientId) {
    try {
        const response = await fetch(`http://localhost:8080/api/ingredients/${ingredientId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const ingredient = await response.json();
        return ingredient;
    } catch (error) {
        console.error('Error fetching ingredient details:', error);
        return null;
    }
}

// Function to fetch multiple ingredients by IDs
async function fetchIngredientsByIds(ingredientIds) {
    try {
        if (!ingredientIds || ingredientIds.length === 0) return [];
        
        const promises = ingredientIds.map(id => fetchIngredientById(id));
        const ingredients = await Promise.all(promises);
        return ingredients.filter(ing => ing !== null);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        return [];
    }
}

// Function to fetch recipe details including ingredients
async function fetchRecipeDetails(recipeId) {
    try {
        const response = await fetch(`http://localhost:8080/api/recipes/${recipeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const recipe = await response.json();
        return recipe;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
}

const resultDisplay = async (resultObj) => {
    let resultLink = document.createElement("a");
    // Khi click sẽ chuyển sang process.html với recipe_id
    resultLink.href = `process.html?recipe_id=${encodeURIComponent(resultObj.id)}`;
    resultDiv.appendChild(resultLink);

    let result = document.createElement("div");
    result.classList.add("result_element");
    resultLink.appendChild(result);

    let resultImg = document.createElement("img");
    resultImg.src = resultObj.imageurl || "images/no-image.png";
    resultImg.classList.add("result_img");
    result.appendChild(resultImg);

    let resultTitle = document.createElement("p");
    resultTitle.innerHTML = resultObj.name || "No name";
    resultTitle.classList.add("result_title");
    result.appendChild(resultTitle);

    let resultTime = document.createElement("p");
    resultTime.innerHTML = "調理時間: " + (resultObj.time || "不明") + "分";
    resultTime.classList.add("result_time");
    result.appendChild(resultTime);

    let resultMaterial = document.createElement("p");
    let material = "材料: ";
    if (resultObj.ingredients && resultObj.ingredients.length > 0) {
        material += resultObj.ingredients.join(" , ");
    } else {
        material += "なし";
    }
    resultMaterial.innerHTML = material;
    resultMaterial.classList.add("result_material");
    result.appendChild(resultMaterial);

    // Add match information for ingredient search results
    if (resultObj.match_info) {
        let matchInfo = document.createElement("p");
        matchInfo.innerHTML = `マッチ度: ${Math.round(resultObj.match_info.match_percentage * 100) / 100}% (${resultObj.match_info.matched_ingredients}/${resultObj.match_info.total_ingredients}個の材料)`;
        matchInfo.classList.add("result_match_info");
        matchInfo.style.color = "#007bff";
        matchInfo.style.fontSize = "14px";
        matchInfo.style.fontWeight = "bold";
        result.appendChild(matchInfo);
        
        // Show missing ingredients if any
        if (resultObj.match_info.missing_ingredients && resultObj.match_info.missing_ingredients.length > 0) {
            // Get missing ingredient names
            const missingIngredientNames = [];
            const substituteInfo = [];
            
            for (const missingIng of resultObj.match_info.missing_ingredients) {
                missingIngredientNames.push(missingIng.name);
                
                // If has substitutes, get substitute names
                if (missingIng.has_substitute && missingIng.substitute_options && missingIng.substitute_options.length > 0) {
                    try {
                        const substituteIngredients = await fetchIngredientsByIds(missingIng.substitute_options);
                        const substituteNames = substituteIngredients.map(sub => sub.name).join(", ");
                        if (substituteNames) {
                            substituteInfo.push(`${missingIng.name} → ${substituteNames}`);
                        }
                    } catch (error) {
                        console.error('Error fetching substitute ingredients:', error);
                    }
                }
            }
            
            // Display missing ingredients
            let missingInfo = document.createElement("p");
            missingInfo.innerHTML = `不足材料: ${missingIngredientNames.join(", ")}`;
            missingInfo.classList.add("result_missing_info");
            missingInfo.style.color = "#dc3545";
            missingInfo.style.fontSize = "12px";
            missingInfo.style.marginBottom = "5px";
            result.appendChild(missingInfo);
            
            // Display substitute information if any
            if (substituteInfo.length > 0) {
                let substituteInfoElement = document.createElement("p");
                substituteInfoElement.innerHTML = `代替材料: ${substituteInfo.join(" | ")}`;
                substituteInfoElement.classList.add("result_substitute_info");
                substituteInfoElement.style.color = "#28a745";
                substituteInfoElement.style.fontSize = "12px";
                substituteInfoElement.style.fontStyle = "italic";
                result.appendChild(substituteInfoElement);
            }
        }
    }

    let resultCountry = document.createElement("img");
    let matchedCountry = country.find(c => c.value === resultObj.cuisine_type);
    resultCountry.src = matchedCountry ? matchedCountry.image : "";
    resultCountry.classList.add("result_country");
    result.appendChild(resultCountry);
};

// Function to get URL parameters
function getUrlParams() {
    let params = {};
    let search = window.location.search.substring(1);
    if (!search) return params;
    search.split("&").forEach(pair => {
        let [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    });
    return params;
}

// Function to update URL with search parameters
function updateUrlWithParams(ingredientIds, maxTime, cuisineType) {
    const params = new URLSearchParams();
    if (ingredientIds && ingredientIds.length > 0) {
        params.set('ingredient_ids', ingredientIds.join(','));
    }
    if (maxTime) {
        params.set('max_time', maxTime);
    }
    if (cuisineType) {
        params.set('cuisine_type', cuisineType);
    }
    params.set('search_type', 'ingredients');
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
}

// Function to perform ingredient search
async function performIngredientSearch(ingredientIds, maxTime, cuisineType) {
    try {
        const requestBody = {
            ingredient_ids: ingredientIds
        };
        
        if (maxTime) {
            requestBody.max_time = parseInt(maxTime);
        }
        
        if (cuisineType) {
            requestBody.cuisine_type = cuisineType;
        }

        const response = await fetch('http://localhost:8080/api/recipes/search-by-ingredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error('Error searching recipes by ingredients:', error);
        throw error;
    }
}

// Function to get search data from sessionStorage or URL params
function getSearchData() {
    const urlParams = getUrlParams();
    
    // Check if this is ingredient search from URL parameters
    if (urlParams.search_type === 'ingredients' && urlParams.ingredient_ids) {
        const ingredientIds = urlParams.ingredient_ids.split(',').map(id => parseInt(id.trim()));
        return {
            type: 'ingredients_from_url',
            ingredientIds: ingredientIds,
            maxTime: urlParams.max_time || null,
            cuisineType: urlParams.cuisine_type || null
        };
    }
    
    // Check if this is from ingredient search (sessionStorage) - first time from material.js
    const searchType = sessionStorage.getItem('searchType');
    if (searchType === 'ingredients') {
        const results = sessionStorage.getItem('materialSearchResults');
        const searchParams = sessionStorage.getItem('materialSearchParams');
        
        if (results && searchParams) {
            const parsedParams = JSON.parse(searchParams);
            // Update URL with parameters for future back navigation
            updateUrlWithParams(parsedParams.ingredientIds, parsedParams.maxTime, parsedParams.cuisineType);
            
            // Clear session storage after first use
            sessionStorage.removeItem('materialSearchResults');
            sessionStorage.removeItem('searchType');
            sessionStorage.removeItem('materialSearchParams');
            
            return {
                type: 'ingredients',
                data: JSON.parse(results)
            };
        }
    }
    
    // Fallback to regular URL params for name/cuisine search
    return { type: 'params', data: urlParams };
}

// Load and display results
(async function loadResults() {

    const searchData = getSearchData();
    
    // Handle ingredient search from URL (when back from process.html)
    if (searchData.type === 'ingredients_from_url') {
        try {
            const recipes = await performIngredientSearch(
                searchData.ingredientIds, 
                searchData.maxTime, 
                searchData.cuisineType
            );
            
            if (!recipes || recipes.length === 0) {
                resultDiv.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
                return;
            }

            // Sort recipes by match percentage (highest first)
            recipes.sort((a, b) => {
                if (a.match_info && b.match_info) {
                    return b.match_info.match_percentage - a.match_info.match_percentage;
                }
                return 0;
            });

            // Display each recipe with full ingredient details
            for (const recipe of recipes) {
                // Fetch full recipe details to get all ingredients
                const recipeDetails = await fetchRecipeDetails(recipe.recipe_id);
                
                await resultDisplay({
                    id: recipe.recipe_id,
                    name: recipe.name,
                    time: recipe.time,
                    imageurl: recipeDetails?.imageurl || "images/no-image.png",
                    ingredients: recipeDetails?.ingredients?.map(ing => ing.name) || [],
                    cuisine_type: recipe.cuisine_type,
                    match_info: recipe.match_info
                });
            }
            return;
        } catch (error) {
            console.error("検索エラー:", error);
            alert("検索中にエラーが発生しました。もう一度お試しください。");
            return;
        }
    }
    
    // Handle ingredient search results from sessionStorage (first time)
    if (searchData.type === 'ingredients') {
        const recipes = searchData.data;
        
        if (!recipes || recipes.length === 0) {
            resultDiv.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
            return;
        }

        // Sort recipes by match percentage (highest first)
        recipes.sort((a, b) => {
            if (a.match_info && b.match_info) {
                return b.match_info.match_percentage - a.match_info.match_percentage;
            }
            return 0;
        });

        // Display each recipe with full ingredient details
        for (const recipe of recipes) {
            // Fetch full recipe details to get all ingredients
            const recipeDetails = await fetchRecipeDetails(recipe.recipe_id);
            
            await resultDisplay({
                id: recipe.recipe_id,
                name: recipe.name,
                time: recipe.time,
                imageurl: recipeDetails?.imageurl || "images/no-image.png",
                ingredients: recipeDetails?.ingredients?.map(ing => ing.name) || [],
                cuisine_type: recipe.cuisine_type,
                match_info: recipe.match_info
            });
        }

        return;
    }
    
    // Handle URL parameter search (existing functionality for name/cuisine search)
    const params = searchData.data;
    let cuisineType = params.cuisine_type || "";
    let maxTime = params.max_time || "";
    let aPartOfName = params.a_part_of_name || "";

    if (!cuisineType) {
        alert("居住国を選択してください。");
        return;
    }

    let url = `http://localhost:8080/api/recipes/filter?cuisine_type=${encodeURIComponent(cuisineType)}`;
    if (maxTime) url += `&max_time=${encodeURIComponent(maxTime)}`;
    if (aPartOfName) url += `&a_part_of_name=${encodeURIComponent(aPartOfName)}`;

    try {
        // Use authFetch if authentication is available, otherwise use regular fetch
        const res = window.auth && window.auth.authFetch ? 
                   await window.auth.authFetch(url) : 
                   await fetch(url);

        if (!res.ok) {
            if (res.status === 401) {
                alert("セッションが終了しました。再度ログインしてください。");
                if (window.auth && window.auth.logout) {
                    window.auth.logout();
                }
                return;
            } else if (res.status === 404) {
                resultDiv.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
                return;
            } else {
                throw new Error(`API Error: ${res.status}`);
            }
        }

        const data = await res.json();

        if (!data.recipes || data.recipes.length === 0) {
            resultDiv.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
            return;
        }

        for (const r of data.recipes) {
            await resultDisplay({
                id: r.recipe_id, // cần id để chuyển sang process.html
                name: r.name,
                time: r.time,
                imageurl: r.imageurl,
                ingredients: (r.ingredients || []).map(ing => ing.name),
                cuisine_type: r.cuisine_type
            });
        }

    } catch (err) {
        console.error("検索エラー:", err);
        alert("検索中にエラーが発生しました。もう一度お試しください。");
    }
})();