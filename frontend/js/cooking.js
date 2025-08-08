/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main);

//main title
mainTitleFn(main,menuList[0].title);

//country
let countryDiv = document.createElement("div");
countryDiv.classList.add("country");
main.appendChild(countryDiv);

let homeCountryP = document.createElement("p");
homeCountryP.innerHTML = "母国";
countryDiv.appendChild(homeCountryP);

let homeCountryDiv = document.createElement("div");
homeCountryDiv.classList.add("home_country");
countryDiv.appendChild(homeCountryDiv);

let homeCountry = document.createElement("select");
homeCountryDiv.appendChild(homeCountry);

for ( var i = 0 ; i < country.length ; i++ ) {
    let homeCountryOption = document.createElement("option");
    homeCountryOption.value = country[i].value;
    homeCountryOption.innerHTML = country[i].name;
    homeCountry.appendChild(homeCountryOption);
}

let residenceCountryP = document.createElement("p");
residenceCountryP.innerHTML = "居住国";
countryDiv.appendChild(residenceCountryP);

let residenceCountryDiv = document.createElement("div");
residenceCountryDiv.classList.add("residence_country");
countryDiv.appendChild(residenceCountryDiv);

let residenceCountry = document.createElement("select");
residenceCountryDiv.appendChild(residenceCountry);

for ( var i = 0 ; i < country.length ; i++ ) {
    let residenceCountryOption = document.createElement("option");
    residenceCountryOption.value = country[i].value;
    residenceCountryOption.innerHTML = country[i].name;
    residenceCountry.appendChild(residenceCountryOption);
}

//search
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

