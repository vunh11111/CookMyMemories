/***** detail *****/
let pageTitle = "Cook My Memories";

/***** body *****/
let body = document.getElementsByTagName("body")[0];

/***** header *****/
let header = document.getElementsByTagName("header")[0];

//header title
let headerTitleDiv = document.createElement("div");
headerTitleDiv.classList.add("header_title");
header.appendChild(headerTitleDiv);
let headerTitleLink = document.createElement("a");
headerTitleLink.href = "/index.html";
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
        link: "cooking",
        type: "search"
    },
    {
        name: "material",
        title: "食材から探す",
        link: "material",
        type: "search"
    }
];

for ( var i = 0 ; i < menuList.length ; i++ ) {
    let headerMenuLink = document.createElement("a");
    headerMenuLink.href = "/" + menuList[i].link;
    headerMenuDiv.appendChild(headerMenuLink);
    let headerMenu = document.createElement("p");
    headerMenu.innerHTML = menuList[i].title;
    headerMenuLink.appendChild(headerMenu);
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
    let hamburgerMenuLink = document.createElement("a");
    hamburgerMenuLink.href = "/" + menuList[i].link;
    hamburgerMenuContent.appendChild(hamburgerMenuLink);
    let hamburgerMenu = document.createElement("p");
    hamburgerMenu.innerHTML = menuList[i].title;
    hamburgerMenuLink.appendChild(hamburgerMenu);

    const beforeStyle = window.getComputedStyle(hamburgerMenuLink, '::before');
    console.log(beforeStyle);
    hamburgerMenuLink.style.setProperty('background-image',"url(\"/img/" + menuList[i].name + ".svg\")");
    console.log("url(\"/img/" + menuList[i].name + ".svg\")")
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
//breadcrumbs
const breadcrumbsFn = (main) => {
    let breadcrumbs = document.createElement("p");
    breadcrumbs.classList.add("breadcrumbs");
    main.appendChild(breadcrumbs);

    let breadcrumbsLink = document.createElement("a");
    breadcrumbsLink.href = "/index.html";
    breadcrumbsLink.innerHTML = "<span>" + "HOME" + "</span>";
    breadcrumbs.appendChild(breadcrumbsLink);

    let currentPath = window.location.pathname;
    let pathParts = currentPath.split('/').filter( part => part.length > 0 );

    for ( var i = 0 ; i < pathParts.length - 1 ; i++ ) {
        let breadcrumbsLink = document.createElement("a");
        var j;
        for ( j = 0 ; j < menuList.length ; j++ ) if ( menuList[j].link === pathParts[i] ) break;
        breadcrumbsLink.href = "/" + pathParts[i];
        breadcrumbsLink.innerHTML = "<span>" + menuList[j].title + "</span>";
        breadcrumbs.appendChild(breadcrumbsLink);
    }
    let lastBreadcrumbs = breadcrumbs.getElementsByTagName("a");
    var j;
    for ( j = 0 ; j < menuList.length ; j++ ) if ( menuList[j].link === pathParts[i] ) break;
    lastBreadcrumbs[lastBreadcrumbs.length-1].after(menuList[j].title);
}

//main title
const mainTitleFn = (main,title) => {
    let mainTitle = document.createElement("p");
    mainTitle.classList.add("main_title");
    mainTitle.innerHTML = title;
    main.appendChild(mainTitle);
}

/***** footer *****/
let footer = document.getElementsByTagName("footer")[0];

//footer title
let footerTitle = document.createElement("a");
footerTitle.classList.add("footer_title");
footerTitle.innerHTML = pageTitle;
footerTitle.href = "/index.html";
footer.appendChild(footerTitle);

let footerMenuDiv = document.createElement("div");
footerMenuDiv.classList.add("footer_menu");
footer.appendChild(footerMenuDiv);

for ( var i = 0 ; i < menuList.length ; i++ ) {
    let footerMenuLink = document.createElement("a");
    footerMenuLink.href = "/" + menuList[i].link;
    footerMenuDiv.appendChild(footerMenuLink);
    let footerMenu = document.createElement("p");
    footerMenu.innerHTML = menuList[i].title;
    footerMenuLink.appendChild(footerMenu);
}

let copyright = document.createElement("p");
copyright.innerHTML = "Copyright © 2025 " + pageTitle + " All Rights Reserved."
copyright.classList.add("copyright");
footer.appendChild(copyright);





