// let main = document.getElementsByTagName("main")[0];

// //breadcrumbs
// breadcrumbsFn(main,"cooking","result","process");

// //main title
// mainTitleFn(main,"process");

// // Lấy query param
// function getQueryParams() {
//     let params = {};
//     let search = window.location.search.substring(1);
//     if (!search) return params;
//     search.split("&").forEach(pair => {
//         let [key, value] = pair.split("=");
//         params[decodeURIComponent(key)] = decodeURIComponent(value || "");
//     });
//     return params;
// }

// const params = getQueryParams();
// const recipeId = params.recipe_id;

// if (!recipeId) {
//     main.innerHTML = "<p>レシピが見つかりません。</p>";
// } else {
//     loadRecipeDetail(recipeId);
// }

// async function loadRecipeDetail(id) {
//     try {
//         const res = await window.auth.authFetch(`http://localhost:8080/api/recipes/${id}`);
//         if (!res.ok) throw new Error(`API Error: ${res.status}`);
//         const recipe = await res.json();

//         cookingDisplay({
//             name: recipe.name,
//             time: recipe.time,
//             difficulty: recipe.difficulty,
//             material: (recipe.ingredients || []).map(ing => ing.name),
//             image: recipe.imageurl || "img/no-image.png",
//             process: recipe || [] // mảng string các bước nấu
//         });

//     } catch (err) {
//         console.error("Error loading recipe detail:", err);
//         main.innerHTML = "<p>詳細を読み込めませんでした。</p>";
//     }
// }

// // Hàm hiển thị (giữ nguyên của bạn)
// function cookingDisplay(resultObj) {
//     // ... toàn bộ code hiển thị như bạn đã có ...
//     let information = document.createElement("div");
//     information.classList.add("information");
//     main.appendChild(information);

//     let informationImg = document.createElement("img");
//     informationImg.classList.add("information_img");
//     informationImg.src = resultObj.image;
//     information.appendChild(informationImg);

//     let informationDetail = document.createElement("div");
//     informationDetail.classList.add("information_detail");
//     information.appendChild(informationDetail);

//     let informationTitle = document.createElement("p");
//     informationTitle.classList.add("information_title");
//     informationTitle.innerHTML = resultObj.name;
//     informationDetail.appendChild(informationTitle);

//     let informationTime = document.createElement("p");
//     informationTime.innerHTML = "調理時間: " + resultObj.time + "分";
//     informationTime.classList.add("information_time");
//     informationDetail.appendChild(informationTime);

//     let informationDifficulty = document.createElement("p");
//     let difficulty = "難易度: ";
//     for ( var i = 0 ; i < resultObj.difficulty ; i++ ) difficulty += '<span style="color: #fbbc04;">★</span>'
//     for ( ; i < 5 ; i++ ) difficulty += '<span style="color: #c4c4c4;">★</span>'
//     informationDifficulty.innerHTML = difficulty;
//     informationDetail.appendChild(informationDifficulty);

//     let informationMaterial = document.createElement("p");
//     informationMaterial.classList.add("information_material");
//     let material = "材料: ";
//     for ( var i = 0 ; i < resultObj.material.length ; i++ ) {
//         material += resultObj.material[i];
//         if ( i !== resultObj.material.length - 1 ) material += " , ";
//     }
//     informationMaterial.innerHTML = material;
//     informationDetail.appendChild(informationMaterial);

//     let informationProcess = document.createElement("div");
//     informationProcess.classList.add("information_process");
//     information.appendChild(informationProcess);

//     let processTitle = document.createElement("p");
//     processTitle.classList.add("process_title");
//     processTitle.innerText = "料理手順";
//     informationProcess.appendChild(processTitle);

//     for ( var i = 0 ; i < resultObj.process.length ; i++ ) {
//         let processElement = document.createElement("div");
//         processElement.classList.add("process_element");
//         if ( i !== resultObj.process.length - 1 ) processElement.classList.add("process_element_arrow");
//         informationProcess.appendChild(processElement);

//         let elementNumber = document.createElement("p");
//         elementNumber.classList.add("process_element_number");
//         elementNumber.innerHTML = i + 1;
//         processElement.appendChild(elementNumber);

//         let elementContent = document.createElement("p");
//         elementContent.classList.add("process_element_content");
//         elementContent.innerHTML = resultObj.process[i];
//         processElement.appendChild(elementContent);
//     }

//     let backButtonDiv = document.createElement("div");
//     backButtonDiv.classList.add("back_button");
//     main.appendChild(backButtonDiv);

//     let backButton = document.createElement("button");
//     backButton.innerHTML = "　戻る";
//     backButton.type = "button";
//     backButton.onclick = () => {history.back()};
//     backButtonDiv.appendChild(backButton);
// }

let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"cooking","result","process");

//main title
mainTitleFn(main,"process");

// Lấy query param
function getQueryParams() {
    let params = {};
    let search = window.location.search.substring(1);
    if (!search) return params;
    search.split("&").forEach(pair => {
        let [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    });
    return params;
}

const params = getQueryParams();
const recipeId = params.recipe_id;

if (!recipeId) {
    main.innerHTML = "<p>レシピが見つかりません。</p>";
} else {
    loadRecipeDetail(recipeId);
}

async function loadRecipeDetail(id) {
    try {
        const res = await window.auth.authFetch(`http://localhost:8080/api/recipes/${id}`);
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        const recipe = await res.json();

        // Chuyển đổi instructions thành mảng process
        let processSteps = [];
        if (recipe.instructions) {
            // Tách instructions thành các bước bằng dấu chấm, số thứ tự, hoặc xuống dòng
            processSteps = recipe.instructions
                .split(/[.。]\s*|\d+\.\s*|\n/)
                .filter(step => step.trim().length > 0)
                .map(step => step.trim());
            
            // Nếu không tách được thành nhiều bước, giữ nguyên là một bước
            if (processSteps.length <= 1) {
                processSteps = [recipe.instructions.trim()];
            }
        }

        cookingDisplay({
            name: recipe.name,
            time: recipe.time,
            difficulty: recipe.difficulty || 3, // Default difficulty nếu không có
            material: (recipe.ingredients || []).map(ing => `${ing.name} (${ing.quantity}${ing.unit})`),
            image: recipe.imageurl || "img/no-image.png",
            process: processSteps
        });

    } catch (err) {
        console.error("Error loading recipe detail:", err);
        main.innerHTML = "<p>詳細を読み込めませんでした。</p>";
    }
}

// Hàm hiển thị (đã sửa để xử lý trường hợp process rỗng)
function cookingDisplay(resultObj) {
    let information = document.createElement("div");
    information.classList.add("information");
    main.appendChild(information);

    let informationImg = document.createElement("img");
    informationImg.classList.add("information_img");
    informationImg.src = resultObj.image;
    information.appendChild(informationImg);

    let informationDetail = document.createElement("div");
    informationDetail.classList.add("information_detail");
    information.appendChild(informationDetail);

    let informationTitle = document.createElement("p");
    informationTitle.classList.add("information_title");
    informationTitle.innerHTML = resultObj.name;
    informationDetail.appendChild(informationTitle);

    let informationTime = document.createElement("p");
    informationTime.innerHTML = "調理時間: " + resultObj.time + "分";
    informationTime.classList.add("information_time");
    informationDetail.appendChild(informationTime);

    let informationDifficulty = document.createElement("p");
    let difficulty = "難易度: ";
    for ( var i = 0 ; i < resultObj.difficulty ; i++ ) difficulty += '<span style="color: #fbbc04;">★</span>'
    for ( ; i < 5 ; i++ ) difficulty += '<span style="color: #c4c4c4;">★</span>'
    informationDifficulty.innerHTML = difficulty;
    informationDetail.appendChild(informationDifficulty);

    let informationMaterial = document.createElement("p");
    informationMaterial.classList.add("information_material");
    let material = "材料: ";
    for ( var i = 0 ; i < resultObj.material.length ; i++ ) {
        material += resultObj.material[i];
        if ( i !== resultObj.material.length - 1 ) material += " , ";
    }
    informationMaterial.innerHTML = material;
    informationDetail.appendChild(informationMaterial);

    let informationProcess = document.createElement("div");
    informationProcess.classList.add("information_process");
    information.appendChild(informationProcess);

    let processTitle = document.createElement("p");
    processTitle.classList.add("process_title");
    processTitle.innerText = "料理手順";
    informationProcess.appendChild(processTitle);

    // Xử lý trường hợp process có thể rỗng
    if (resultObj.process && resultObj.process.length > 0) {
        for ( var i = 0 ; i < resultObj.process.length ; i++ ) {
            let processElement = document.createElement("div");
            processElement.classList.add("process_element");
            if ( i !== resultObj.process.length - 1 ) processElement.classList.add("process_element_arrow");
            informationProcess.appendChild(processElement);

            let elementNumber = document.createElement("p");
            elementNumber.classList.add("process_element_number");
            elementNumber.innerHTML = i + 1;
            processElement.appendChild(elementNumber);

            let elementContent = document.createElement("p");
            elementContent.classList.add("process_element_content");
            elementContent.innerHTML = resultObj.process[i];
            processElement.appendChild(elementContent);
        }
    } else {
        // Hiển thị thông báo nếu không có bước nấu
        let noProcess = document.createElement("p");
        noProcess.innerHTML = "手順情報がありません";
        noProcess.style.color = "#999";
        informationProcess.appendChild(noProcess);
    }

    let backButtonDiv = document.createElement("div");
    backButtonDiv.classList.add("back_button");
    main.appendChild(backButtonDiv);

    let backButton = document.createElement("button");
    backButton.innerHTML = "　戻る";
    backButton.type = "button";
    backButton.onclick = () => {history.back()};
    backButtonDiv.appendChild(backButton);
}