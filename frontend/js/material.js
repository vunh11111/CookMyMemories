let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"material");

//main title
mainTitleFn(main,"material");

//country
countrySelect();

//maxTime
maxTime();

// Variables to store ingredients and selected materials
let allIngredients = [];
let selectMaterialArray = [];

// Function to map country selection to cuisine type
const getCuisineType = (countryValue) => {
    const countryMapping = {
        'vietnam': 'Vie',
        'japan': 'Jap',
        'ベトナム': 'Vie',
        '日本': 'Jap'
        // Add more mappings as needed based on your country array values
    };
    return countryMapping[countryValue] || 'Vie'; // Default to Vie
};

// Function to get ingredient ID by name from allIngredients array
const getIngredientIdByName = (ingredientName) => {
    const ingredient = allIngredients.find(ing => ing.name === ingredientName);
    return ingredient ? ingredient.ingredient_id : null;
};

// Function to fetch ingredients from API
const fetchIngredients = async (cuisineType) => {
    try {
        const response = await fetch(`http://localhost:8080/api/recipes/filter?cuisine_type=${cuisineType}`);
        const data = await response.json();
        
        // Extract unique ingredients from all recipes with their IDs
        const ingredientsMap = new Map();
        data.recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                ingredientsMap.set(ingredient.name, {
                    ingredient_id: ingredient.ingredient_id,
                    name: ingredient.name
                });
            });
        });
        
        return Array.from(ingredientsMap.values());
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        return [];
    }
};

// Add CSS styles for ingredient layout
const addIngredientStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .check_box {
            display: flex;
            flex-wrap: wrap;
            gap: 10px; /* giảm khoảng cách để bớt lãng phí chỗ trống */
            margin: 15px 0;
            padding: 15px;
            background-color: rgb(255,250,220);
            border-radius: 8px;
            border: 1px solid rgb(255,250,220);
            justify-content: flex-start; /* canh trái */
        }
        
        .check_box label {
            display: flex;
            align-items: center;
            font-size: 14px;
            cursor: pointer;
            white-space: nowrap;
            padding: 5px 12px;
            background-color: white;
            border-radius: 4px;
            border: 1px solid rgb(255,250,220);
            transition: background-color 0.2s ease;
            flex-shrink: 0; /* không cho label bị ép nhỏ */
            flex: 1 1 auto; /* cho phép co giãn */
            max-width: fit-content;
        }
        
        .check_box label:hover {
            background-color: rgb(255,250,220);
        }
        
        .check_box input[type="checkbox"] {
            margin-right: 8px;
            transform: scale(1.1);
        }
        
        .check_box input[type="checkbox"]:checked + span {
            font-weight: bold;
            color: #007bff;
        }
        
        .check_box label:has(input:checked) {
            background-color: rgb(255,250,220);
            border-color: #007bff;
        }
    `;
    document.head.appendChild(style);
};

// Function to create ingredient checkboxes
const createIngredientCheckboxes = (ingredients) => {
    // Add styles if not already added
    if (!document.querySelector('style[data-ingredient-styles]')) {
        addIngredientStyles();
        document.querySelector('style').setAttribute('data-ingredient-styles', 'true');
    }
    
    // Clear existing checkboxes
    const existingCheckBoxDiv = document.querySelector('.check_box');
    if (existingCheckBoxDiv) {
        existingCheckBoxDiv.remove();
    }
    
    // Create new checkbox container
    let checkBoxDiv = document.createElement("div");
    checkBoxDiv.classList.add("check_box");
    
    // Insert after the dropdown menu title
    const dropDownMenuTitle = document.querySelector('.main_sub_title');
    dropDownMenuTitle.parentNode.insertBefore(checkBoxDiv, dropDownMenuTitle.nextSibling);
    
    // Create checkboxes for each ingredient
    ingredients.forEach(ingredient => {
        let checkBoxLabel = document.createElement("label");
        checkBoxDiv.appendChild(checkBoxLabel);
        
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "material";
        checkBox.value = ingredient.name;
        checkBox.setAttribute('data-ingredient-id', ingredient.ingredient_id);
        checkBox.classList.add("check_box_element");
        checkBox.id = `check_box_${ingredient.name}`;
        checkBoxLabel.appendChild(checkBox);
        
        let labelSpan = document.createElement("span");
        labelSpan.textContent = ingredient.name;
        checkBoxLabel.appendChild(labelSpan);
    });
};

// Create ingredient selection title
let selectIngredientTitle = document.createElement("p");
selectIngredientTitle.classList.add("main_sub_title");
selectIngredientTitle.innerHTML = "食材を選ぶ";
main.appendChild(selectIngredientTitle);

// Create selected materials title
let selectMaterialTitle = document.createElement("p");
selectMaterialTitle.classList.add("main_sub_title");
selectMaterialTitle.innerHTML = "選んだ食材";
main.appendChild(selectMaterialTitle);

let selectMaterialDiv = document.createElement("div");
selectMaterialDiv.classList.add("select_material");
main.appendChild(selectMaterialDiv);

let searchDiv = document.createElement("div");
searchDiv.classList.add("search");
main.appendChild(searchDiv);

let search = document.createElement("button");
search.innerHTML = "検索";
search.classList.add("searchButton");
searchDiv.appendChild(search);

let searchDelete = document.createElement("button");
searchDelete.innerHTML = "リセット";
searchDelete.classList.add("resetButton");
searchDiv.appendChild(searchDelete);

const makeSelectMaterial = (value) => {
    let selectMaterial = document.createElement("div");
    selectMaterial.innerHTML = `<p>${value}</p>`;
    selectMaterial.id = `selectMaterial_${value}`;
    selectMaterial.style.display = "inline-block";
    selectMaterial.style.margin = "5px";
    selectMaterial.style.padding = "5px 10px";
    selectMaterial.style.backgroundColor = "rgb(255,250,220)";
    selectMaterial.style.border = "1px solid #ccc";
    selectMaterial.style.borderRadius = "4px";
    selectMaterialDiv.appendChild(selectMaterial);

    let selectMaterialButton = document.createElement("button");
    selectMaterialButton.innerHTML = "×";
    selectMaterialButton.value = `${value}`;
    selectMaterialButton.classList.add("select_material_button");
    selectMaterialButton.style.marginLeft = "8px";
    selectMaterialButton.style.backgroundColor = "transparent";
    selectMaterialButton.style.border = "none";
    selectMaterialButton.style.cursor = "pointer";
    selectMaterial.appendChild(selectMaterialButton);

    selectMaterialArray.push(value);
}

const deleteSelectMaterial = (value) => {
    const element = document.getElementById(`selectMaterial_${value}`);
    if (element) {
        element.remove();
    }
    selectMaterialArray = selectMaterialArray.filter(element => element !== value);
}

const resetSelectMaterial = () => {
    while (selectMaterialArray.length > 0) {
        const checkBox = document.getElementById(`check_box_${selectMaterialArray[0]}`);
        if (checkBox) {
            checkBox.checked = false;
        }
        deleteSelectMaterial(selectMaterialArray[0]);
    }
};

// Function to get max time value from the max time input
const getMaxTimeValue = () => {
    const maxTimeInput = document.querySelector('input[type="number"]') || 
                        document.querySelector('.max_time input') ||
                        document.querySelector('#max_time');
    return maxTimeInput ? parseInt(maxTimeInput.value) || null : null;
};

// Function to get current cuisine type from residence country selection
const getCurrentCuisineType = () => {
    const residenceCountrySelect = document.querySelector('.residence_country select');
    if (residenceCountrySelect) {
        return getCuisineType(residenceCountrySelect.value);
    }
    return 'Vie'; // Default
};

// Function to search recipes by ingredients
const searchRecipesByIngredients = async () => {
    if (selectMaterialArray.length === 0) {
        alert("食材を選択してください。");
        return;
    }

    // Get ingredient IDs from selected materials
    const ingredientIds = [];
    selectMaterialArray.forEach(materialName => {
        const checkBox = document.getElementById(`check_box_${materialName}`);
        if (checkBox) {
            const ingredientId = parseInt(checkBox.getAttribute('data-ingredient-id'));
            if (ingredientId) {
                ingredientIds.push(ingredientId);
            }
        }
    });

    if (ingredientIds.length === 0) {
        alert("選択した食材のIDを取得できませんでした。");
        return;
    }

    const maxTime = getMaxTimeValue();
    const cuisineType = getCurrentCuisineType();

    const requestBody = {
        ingredient_ids: ingredientIds,
        cuisine_type: cuisineType
    };

    // Add max_time only if it has a value
    if (maxTime && maxTime > 0) {
        requestBody.max_time = maxTime;
    }

    try {
        const response = await fetch('http://localhost:8080/api/recipes/search-by-ingredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const recipes = await response.json();
        
        if (recipes.length === 0) {
            alert("選択した条件に一致するレシピが見つかりませんでした。");
            return;
        }

        // Store search results in sessionStorage for resultFromMaterial.html
        const searchResults = recipes.map(recipe => ({
            recipe_id: recipe.recipe_id,
            name: recipe.name,
            time: recipe.time,
            cuisine_type: recipe.cuisine_type,
            ingredients: selectMaterialArray, // Use selected materials as ingredient names
            match_info: recipe.match_info
        }));

        // sessionStorage.setItem('materialSearchResults', JSON.stringify(searchResults));
        // sessionStorage.setItem('searchType', 'ingredients');
        
        sessionStorage.setItem('materialSearchResults', JSON.stringify(searchResults));
        sessionStorage.setItem('searchType', 'ingredients');
        sessionStorage.setItem('materialSearchParams', JSON.stringify({
            ingredientIds: ingredientIds,
            maxTime: maxTime,
            cuisineType: cuisineType
        }));
        // Redirect to results page
        window.location.href = 'resultFromMaterial.html';

    } catch (error) {
        console.error('Error searching recipes:', error);
        alert("レシピ検索中にエラーが発生しました。もう一度お試しください。");
    }
};

// Event listener for checkbox changes
document.addEventListener('change', (event) => {
    if (event.target.matches('.check_box_element')) {
        let checkBox = event.target;
        if (checkBox.checked) {
            makeSelectMaterial(checkBox.value);
        } else {
            deleteSelectMaterial(checkBox.value);
        }
    }
});

// Event listener for removing selected materials
document.addEventListener('click', (event) => {
    if (event.target.matches('.select_material_button')) {
        let button = event.target;
        const checkBox = document.getElementById(`check_box_${button.value}`);
        if (checkBox) {
            checkBox.checked = false;
        }
        deleteSelectMaterial(button.value);
    }
});

// Reset button event listener
searchDelete.addEventListener("click", () => {
    resetSelectMaterial();
});

// Function to handle residence country (母国) selection change
const handleResidenceCountryChange = async (selectedCountryValue) => {
    const cuisineType = getCuisineType(selectedCountryValue);
    
    // Fetch and display ingredients for the selected cuisine
    const ingredients = await fetchIngredients(cuisineType);
    allIngredients = ingredients;
    
    // Reset selected materials
    resetSelectMaterial();
    
    // Create new checkboxes
    createIngredientCheckboxes(ingredients);
};

// Listen for residence country (母国) selection changes
document.addEventListener('change', (event) => {
    // Check if the changed element is the residence country select
    if (event.target.closest('.residence_country')) {
        const selectedCountry = event.target.value;
        handleResidenceCountryChange(selectedCountry);
    }
});

// Initialize with default country based on residence country selection
document.addEventListener('DOMContentLoaded', async () => {
    // Wait a bit for the countrySelect() function to create the elements
    setTimeout(async () => {
        // Get the residence country select element
        const residenceCountrySelect = document.querySelector('.residence_country select');
        
        if (residenceCountrySelect) {
            // Get the default selected value (options[1] is selected by default according to your code)
            const defaultCountryValue = residenceCountrySelect.value;
            
            // Load ingredients for the default selected country
            await handleResidenceCountryChange(defaultCountryValue);
        } else {
            // Fallback: Load default ingredients for Vietnam
            const defaultIngredients = await fetchIngredients('Vie');
            allIngredients = defaultIngredients;
            createIngredientCheckboxes(defaultIngredients);
        }
    }, 100);
});

// Search button functionality - Updated to use the search-by-ingredients API
search.addEventListener("click", () => {
    console.log("Selected ingredients:", selectMaterialArray);
    searchRecipesByIngredients();
});