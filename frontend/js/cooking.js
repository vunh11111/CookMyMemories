/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"cooking");

//main title
mainTitleFn(main,"cooking");

//country
countrySelect();

//maxTime
maxTime();

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

