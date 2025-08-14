let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main, "cooking");

//main title
mainTitleFn(main, "cooking");

// country select
const countrySelect2 = () => {
    let countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    main.appendChild(countryDiv);

    //母国
    let homeCountryP = document.createElement("p");
    homeCountryP.innerHTML = "居住国";
    countryDiv.appendChild(homeCountryP);

    let homeCountryDiv = document.createElement("div");
    homeCountryDiv.classList.add("home_country");
    countryDiv.appendChild(homeCountryDiv);

    let homeCountry = document.createElement("select");
    homeCountryDiv.appendChild(homeCountry);

    // 居住国
    let residenceCountryP = document.createElement("p");
    residenceCountryP.innerHTML = "母国";
    countryDiv.appendChild(residenceCountryP);

    let residenceCountryDiv = document.createElement("div");
    residenceCountryDiv.classList.add("residence_country");
    countryDiv.appendChild(residenceCountryDiv);

    let residenceCountry = document.createElement("select");
    residenceCountryDiv.appendChild(residenceCountry);

    // Chỉ thêm 2 giá trị liên quan đến DB
    let countries = [
        { value: "Vie", name: "ベトナム" },
        { value: "Jap", name: "日本" }
    ];

    countries.forEach(c => {
        let option1 = document.createElement("option");
        option1.value = c.value;
        option1.innerHTML = c.name;
        homeCountry.appendChild(option1);

        let option2 = document.createElement("option");
        option2.value = c.value;
        option2.innerHTML = c.name;
        residenceCountry.appendChild(option2);
    });

    residenceCountry.value = "Vie"; // default
    return { homeCountry, residenceCountry };
};

// maxTime
const maxTime2 = () => {
    let timeDiv = document.createElement("div");
    timeDiv.classList.add("max_time");
    main.appendChild(timeDiv);

    let timeP = document.createElement("p");
    timeP.innerHTML = "最大時間(分)";
    timeDiv.appendChild(timeP);

    let timeInput = document.createElement("input");
    timeInput.type = "number";
    timeInput.name = "number";
    timeDiv.appendChild(timeInput);

    return timeInput;
};

// search UI
let search = document.createElement("div");
search.classList.add("search");
main.appendChild(search);

let searchBox = document.createElement("input");
searchBox.type = "search";
searchBox.name = "search";
searchBox.placeholder = "料理名を入力";
searchBox.classList.add("search_box");
search.appendChild(searchBox);

let searchButton = document.createElement("input");
searchButton.type = "submit";
searchButton.name = "submit";
searchButton.value = "検索";
searchButton.classList.add("search_button");
search.appendChild(searchButton);

// Khởi tạo select và input
const { residenceCountry } = countrySelect2();
const timeInput = maxTime2();

// Tạo div để hiện kết quả
let resultDiv = document.createElement("div");
resultDiv.classList.add("result");
main.appendChild(resultDiv);

// Hàm render kết quả đơn giản
function renderSearchResults(data) {
    resultDiv.innerHTML = ""; // Xoá kết quả cũ

    if (!data.recipes || data.recipes.length === 0) {
        resultDiv.innerHTML = "<p>検索結果がありません。</p>";
        return;
    }

    data.recipes.forEach(recipe => {
        let card = document.createElement("div");
        card.classList.add("recipe-card");

        let title = document.createElement("h3");
        title.textContent = recipe.name || "No name";
        card.appendChild(title);

        if (recipe.description) {
            let desc = document.createElement("p");
            desc.textContent = recipe.description;
            card.appendChild(desc);
        }

        if (recipe.url_img) {
            let img = document.createElement("img");
            img.src = recipe.url_img;
            img.alt = recipe.name || "recipe image";
            card.appendChild(img);
        }

        resultDiv.appendChild(card);
    });
}

// ✅ HÀM SEARCH đã sửa, có thêm param a_part_of_name (lấy từ searchBox)
// searchButton.addEventListener("click", async () => {
//     if (!window.auth.isLogged()) {
//         alert("ログインが必要です。ログインページに移動します。");
//         window.location.href = "login.html";
//         return;
//     }

//     let cuisineType = residenceCountry.value;
//     let maxTimeVal = timeInput.value;
//     let aPartOfName = searchBox.value.trim();

//     if (!cuisineType) {
//         alert("居住国を選択してください。");
//         return;
//     }

//     // Xây dựng URL query param
//     let url = `http://localhost:8080/api/recipes/filter?cuisine_type=${encodeURIComponent(cuisineType)}`;
//     if (maxTimeVal) url += `&max_time=${encodeURIComponent(maxTimeVal)}`;
//     if (aPartOfName) url += `&a_part_of_name=${encodeURIComponent(aPartOfName)}`;

//     try {
//         searchButton.disabled = true;
//         searchButton.value = "検索中...";

//         const res = await window.auth.authFetch(url);

//         if (!res.ok) {
//             if (res.status === 401) {
//                 alert("セッションが終了しました。再度ログインしてください。");
//                 window.auth.logout();
//                 return;
//             } else if (res.status === 403) {
//                 alert("アクセス権限がありません。");
//                 return;
//             } else if (res.status === 404) {
//                 alert("検索結果が見つかりませんでした。");
//                 resultDiv.innerHTML = "<p>検索結果が見つかりませんでした。</p>";
//                 return;
//             } else {
//                 throw new Error(`API Error: ${res.status} - ${res.statusText}`);
//             }
//         }

//         const data = await res.json();
//         console.log("検索結果:", data);

//         renderSearchResults(data);

//     } catch (err) {
//         console.error("検索エラー:", err);
//         if (err.name === 'TypeError' && err.message.includes('fetch')) {
//             alert("サーバーに接続できません。ネットワーク接続を確認してください。");
//         } else {
//             alert("検索中にエラーが発生しました。もう一度お試しください。");
//         }
//     } finally {
//         searchButton.disabled = false;
//         searchButton.value = "検索";
//     }
// });
// ✅ NÚT TÌM KIẾM - Chuyển hướng sang result.html kèm query param
searchButton.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn submit form mặc định

    // if (!window.auth.isLogged()) {
    //     alert("ログインが必要です。ログインページに移動します。");
    //     window.location.href = "login.html";
    //     return;
    // }

    let cuisineType = residenceCountry.value;
    let maxTimeVal = timeInput.value;
    let aPartOfName = searchBox.value.trim();

    if (!cuisineType) {
        alert("居住国を選択してください。");
        return;
    }

    // Tạo query string
    let queryParams = new URLSearchParams();
    queryParams.append("cuisine_type", cuisineType);
    if (maxTimeVal) queryParams.append("max_time", maxTimeVal);
    if (aPartOfName) queryParams.append("a_part_of_name", aPartOfName);

    // Chuyển hướng sang trang kết quả
    window.location.href = `result.html?${queryParams.toString()}`;
});
