let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"cooking","result");

//main title
mainTitleFn(main,"result");

//result container
let resultDiv = document.createElement("div");
resultDiv.classList.add("result");
main.appendChild(resultDiv);

const resultDisplay = (resultObj) => {
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

    let resultCountry = document.createElement("img");
    let matchedCountry = country.find(c => c.value === resultObj.cuisine_type);
    resultCountry.src = matchedCountry ? matchedCountry.image : "";
    resultCountry.classList.add("result_country");
    result.appendChild(resultCountry);
};
// Lấy query param từ URL
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

// Gọi API và render
(async function loadResults() {
    // if (!window.auth.isLogged()) {
    //     alert("ログインが必要です。ログインページに移動します。");
    //     window.location.href = "login.html";
    //     return;
    // }

    let params = getQueryParams();
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
        const res = await window.auth.authFetch(url);

        if (!res.ok) {
            if (res.status === 401) {
                alert("セッションが終了しました。再度ログインしてください。");
                window.auth.logout();
                return;
            } else if (res.status === 404) {
                resultDiv.innerHTML = "<p class=\"result_error\">検索結果が見つかりませんでした。</p>";
                return;
            } else {
                throw new Error(`API Error: ${res.status}`);
            }
        }

        const data = await res.json();

        if (!data.recipes || data.recipes.length === 0) {
            resultDiv.innerHTML = "<p class=\"result_error\">検索結果が見つかりませんでした。</p>";
            return;
        }

        data.recipes.forEach(r => {
            resultDisplay({
                id: r.recipe_id, // cần id để chuyển sang process.html
                name: r.name,
                time: r.time,
                imageurl: r.imageurl,
                ingredients: (r.ingredients || []).map(ing => ing.name),
                cuisine_type: r.cuisine_type
            });
        });

    } catch (err) {
        console.error("検索エラー:", err);
        alert("検索中にエラーが発生しました。もう一度お試しください。");
    }
})();









