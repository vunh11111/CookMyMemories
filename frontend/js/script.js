/***** detail *****/
let pageTitle = "Cook My Memories";
let pageExplanation = "海外在住のあなたへ。故郷の味が恋しくなっても、食材が手に入らないと諦めていませんか？「Cook My Memories」は、今いる場所で手に入る食材を使って、懐かしい母国の料理を再現するためのレシピ検索アプリです。このアプリが、あなたの「食べたい」を「作れる」に変え、食卓から故郷との距離を縮めます。さあ、思い出の味を、今日の食卓で楽しみましょう。";

/***** head *****/
let head = document.getElementsByTagName("head")[0];

let metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = pageExplanation;
head.appendChild(metaDescription);

/***** body *****/
let body = document.getElementsByTagName("body")[0];

/***** header *****/
let header = document.getElementsByTagName("header")[0];

//header title
let headerTitleDiv = document.createElement("div");
headerTitleDiv.classList.add("header_title");
header.appendChild(headerTitleDiv);
let headerTitleLink = document.createElement("a");
headerTitleLink.href = "index.html";
headerTitleDiv.appendChild(headerTitleLink);
let headerTitle = document.createElement("p");
headerTitle.innerHTML = pageTitle;
headerTitleLink.appendChild(headerTitle);

//header menu
let headerMenuDiv = document.createElement("div");
headerMenuDiv.classList.add("header_menu");
headerMenuDiv.id = "header_menu"
header.appendChild(headerMenuDiv);

let menuList = [
    {
        name: "cooking",
        title: "料理名から探す",
        link: "cooking.html",
        type: "search"
    },
    {
        name: "material",
        title: "食材から探す",
        link: "material.html",
        type: "search"
    },
    {
        name: "result",
        title: "検索結果",
        link: "result.html",
        type: "result"
    },
    {
        name: "process",
        title: "調理方法",
        link: "process.html",
        type: "process"
    }
];

for ( var i = 0 ; i < menuList.length ; i++ ) {
    if ( menuList[i].type === 'search' ) {
        let headerMenuLink = document.createElement("a");
        headerMenuLink.href = menuList[i].link;
        headerMenuLink.style.setProperty('--item-image',`url("../img/${menuList[i].name}.svg")`);
        headerMenuDiv.appendChild(headerMenuLink);

        let headerMenu = document.createElement("p");
        headerMenu.innerHTML = menuList[i].title;
        headerMenuLink.appendChild(headerMenu);
    }
}

//hamburger menu
let hamburgerMenuDiv = document.createElement("div");
hamburgerMenuDiv.classList.add("hamburger_menu");
header.appendChild(hamburgerMenuDiv);

let hamburger_input = document.createElement("input");
hamburger_input.id = "hamburger_input";
hamburger_input.classList.add("hamburger_hidden");
hamburger_input.type = "checkbox";
hamburgerMenuDiv.appendChild(hamburger_input);

let hamburger_label = document.createElement("label");
hamburger_label.htmlFor = "hamburger_input";
hamburger_label.classList.add("hamburger_open");
hamburgerMenuDiv.appendChild(hamburger_label);

hamburger_label.appendChild(document.createElement("span"));

let hamburgerMenuContent = document.createElement("div");
hamburgerMenuContent.classList.add("hamburger_content");
hamburgerMenuDiv.appendChild(hamburgerMenuContent);

for ( var i = 0 ; i < menuList.length ; i++ ) {
    if ( menuList[i].type === 'search' ) {
        let hamburgerMenuLink = document.createElement("a");
        hamburgerMenuLink.href = menuList[i].link;
        hamburgerMenuLink.innerHTML = menuList[i].title;
        hamburgerMenuLink.style.setProperty('--item-image',`url("../img/${menuList[i].name}.svg")`);
        hamburgerMenuContent.appendChild(hamburgerMenuLink);
    }
}

let hamburger_background = document.createElement("label");
hamburger_background.classList.add("hamburger_background");
hamburger_background.htmlFor = "hamburger_input";
hamburgerMenuDiv.appendChild(hamburger_background);

hamburger_input.addEventListener('change', () => {
    if ( hamburger_input.checked ) {
        body.classList.add("is-noscroll");
        console.log(1);
    } else body.classList.remove('is-noscroll');
});

/***** main *****/

//country (sample)
let country = [
    {
        value: "japan",
        name: "日本",
        image: "img/japan.png"
    },
    {
        value: "vietnam",
        name: "ベトナム",
        image: "img/vietnam.png"
    }
];

//cooking obj (sample)
let cooking = {
    sushi: {
        name: "寿司",
        material: [ "米" , "酢" , "マグロ" ],
        image: "img/sushi_tuna.png",
        country: "japan",
        process: [
            "米を炊く",
            "酢と米を混ぜる",
            "米の上にマグロをのせる"
        ]
    },
    onigiri: {
        name: "おにぎり",
        material: [ "米" , "のり" , "梅" ],
        image: "img/sushi_tuna.png",
        country: "japan",
        process: [
            "米を炊く",
            "にぎる"
        ]
    }
}

//breadcrumbs
const breadcrumbsFn = (main,...content) => {
    let breadcrumbs = document.createElement("p");
    breadcrumbs.classList.add("breadcrumbs");
    main.appendChild(breadcrumbs);

    let breadcrumbsLink = document.createElement("a");
    breadcrumbsLink.href = "index.html";
    breadcrumbsLink.innerHTML = "<span>" + "HOME" + "</span>";
    breadcrumbs.appendChild(breadcrumbsLink);

    for ( var i = 0 ; i < content.length ; i++ ) {
        for ( var j = 0 ; j < menuList.length ; j++ ) {
            if ( menuList[j].name === content[i] ) {
                if ( i !== content.length - 1 ) {
                    let breadcrumbsLink = document.createElement("a");
                    breadcrumbsLink.href = menuList[j].link;
                    breadcrumbsLink.innerHTML = "<span>" + menuList[j].title + "</span>";
                    breadcrumbs.appendChild(breadcrumbsLink);
                } else {
                    let lastBreadcrumbs = breadcrumbs.getElementsByTagName("a");
                    lastBreadcrumbs[lastBreadcrumbs.length-1].after(menuList[j].title);
                    document.getElementsByTagName("title")[0].innerHTML = menuList[i].title + " | " + pageTitle;
                }
                break;
            }
        }
    }
}

//main title
const mainTitleFn = (main,title) => {
    let mainTitle = document.createElement("p");
    mainTitle.classList.add("main_title");
    mainTitle.innerHTML = title;
    main.appendChild(mainTitle);
}

//country select
const countrySelect = () => {
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

    residenceCountry.options[1].selected = true;
};

/***** footer *****/
let footer = document.getElementsByTagName("footer")[0];

//footer title
let footerTitle = document.createElement("a");
footerTitle.classList.add("footer_title");
footerTitle.innerHTML = pageTitle;
footerTitle.href = "index.html";
footer.appendChild(footerTitle);

let footerMenuDiv = document.createElement("div");
footerMenuDiv.classList.add("footer_menu");
footer.appendChild(footerMenuDiv);

for ( var i = 0 ; i < menuList.length ; i++ ) {
    if ( menuList[i].type === 'search' ) {
        let footerMenuLink = document.createElement("a");
        footerMenuLink.href = menuList[i].link;
        footerMenuDiv.appendChild(footerMenuLink);
        let footerMenu = document.createElement("p");
        footerMenu.innerHTML = menuList[i].title;
        footerMenuLink.appendChild(footerMenu);
    }
}

let copyright = document.createElement("p");
copyright.innerHTML = "Copyright © 2025 " + pageTitle + " All Rights Reserved."
copyright.classList.add("copyright");
footer.appendChild(copyright);





