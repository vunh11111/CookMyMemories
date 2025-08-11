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

let menuList = {
    cooking: {
        title: "料理名から探す",
        link: "cooking.html",
        type: "search"
    },
    material: {
        title: "食材から探す",
        link: "material.html",
        type: "search"
    },
    result: {
        title: "検索結果",
        link: "result.html",
        type: "result"
    },
    process: {
        title: "調理方法",
        link: "process.html",
        type: "process"
    },
    sitepolicy: {
        title: "サイトポリシー",
        link: "sitepolicy.html",
        type: "sitepolicy"
    },
    registration: {
        title: "アカウント登録",
        link: "registration.html",
        type: "account"
    },
    login: {
        title: "ログイン",
        link: "login.html",
        type: "account"
    },
};

for ( var i = 0 ; i < Object.values(menuList).length ; i++ ) {
    if ( Object.values(menuList)[i].type === 'search' ) {
        let headerMenuLink = document.createElement("a");
        headerMenuLink.href = Object.values(menuList)[i].link;
        headerMenuLink.classList.add("header_menu_list");
        headerMenuLink.style.setProperty('--item-image',`url("../img/${Object.keys(menuList)[i]}.svg")`);
        headerMenuDiv.appendChild(headerMenuLink);

        let headerMenu = document.createElement("p");
        headerMenu.innerHTML = Object.values(menuList)[i].title;
        headerMenuLink.appendChild(headerMenu);
    }
}

let login = document.createElement("a");
login.classList.add("login");
login.href = "login.html";
headerMenuDiv.appendChild(login);

let loginImg = document.createElement("img");
loginImg.src = "img/login.png";
login.appendChild(loginImg);

let loginName = document.createElement("p");
loginName.innerHTML = "ログイン";
login.appendChild(loginName);

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

const hamburgerMenuCreate = (title,link,img) => {
    let hamburgerMenuLink = document.createElement("a");
    hamburgerMenuLink.href = link;
    hamburgerMenuLink.innerHTML = title;
    hamburgerMenuLink.style.setProperty('--item-image',`url("../img/${img}")`);
    hamburgerMenuContent.appendChild(hamburgerMenuLink);
}

hamburgerMenuCreate("ログイン","login.html","login.png");
hamburgerMenuDiv.getElementsByTagName("a")[0].classList.add("hamburger_login");

for ( var i = 0 ; i < Object.values(menuList).length ; i++ ) {
    if ( Object.values(menuList)[i].type === 'search' ) {
        hamburgerMenuCreate(Object.values(menuList)[i].title,Object.values(menuList)[i].link,Object.keys(menuList)[i]+".svg");
    }
}

let hamburger_background = document.createElement("label");
hamburger_background.classList.add("hamburger_background");
hamburger_background.htmlFor = "hamburger_input";
hamburgerMenuDiv.appendChild(hamburger_background);

hamburger_input.addEventListener('change', () => {
    if ( hamburger_input.checked ) body.classList.add("is-noscroll");
    else body.classList.remove('is-noscroll');
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
        time: 30,
        difficulty: 4,
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
        time: 10,
        difficulty: 1,
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
        if ( i !== content.length - 1 ) {
            let breadcrumbsLink = document.createElement("a");
            breadcrumbsLink.href = menuList[content[i]].link;
            breadcrumbsLink.innerHTML = "<span>" + menuList[content[i]].title + "</span>";
            breadcrumbs.appendChild(breadcrumbsLink);
        } else {
            let lastBreadcrumbs = breadcrumbs.getElementsByTagName("a");
            lastBreadcrumbs[lastBreadcrumbs.length-1].after(menuList[content[i]].title);
            document.getElementsByTagName("title")[0].innerHTML = menuList[content[i]].title + " | " + pageTitle;
        }
    }
}

//main title
const mainTitleFn = (main,name) => {
    let mainTitle = document.createElement("p");
    mainTitle.classList.add("main_title");
    mainTitle.innerHTML = menuList[name].title;
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

//maxTime
const maxTime = () => {
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

for ( var i = 0 ; i < Object.values(menuList).length ; i++ ) {
    if ( Object.values(menuList)[i].type === 'search' ) {
        let footerMenuLink = document.createElement("a");
        footerMenuLink.href = Object.values(menuList)[i].link;
        footerMenuDiv.appendChild(footerMenuLink);
        let footerMenu = document.createElement("p");
        footerMenu.innerHTML = Object.values(menuList)[i].title;
        footerMenuLink.appendChild(footerMenu);
    }
}

let copyright = document.createElement("p");
copyright.innerHTML = "Copyright © 2025 " + pageTitle + " All Rights Reserved."
copyright.classList.add("copyright");
footer.appendChild(copyright);





