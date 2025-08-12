/***** main *****/
let main = document.getElementsByTagName("main")[0];

//main top
let mainTop = document.createElement("div");
mainTop.classList.add("main_top");
main.appendChild(mainTop);

let mainTopImg = document.createElement("img");
mainTopImg.src = "img/main_top.png";
mainTop.appendChild(mainTopImg);

let mainTopText = document.createElement("p");
mainTopText.innerHTML = "懐かしの味を<br>この町で。";
mainTop.appendChild(mainTopText);

//main content
let mainContentTitle = document.createElement("p");
mainContentTitle.classList.add("main_content_title");
mainContentTitle.innerHTML = "もう食材で悩まない。<br>いつもの味を、あなたの食卓で。";
main.appendChild(mainContentTitle);

let mainContent = document.createElement("p");
mainContent.classList.add("main_content");
mainContent.innerHTML = pageExplanation;
main.appendChild(mainContent);

// main menu
let mainMenuDiv = document.createElement("div");
mainMenuDiv.classList.add("main_menu");
main.appendChild(mainMenuDiv);

for ( var i = 0 ; i < Object.values(menuList).length ; i++ ) {
    if ( Object.values(menuList)[i].type === 'search' ) {
        let mainMenuLink = document.createElement("a");
        mainMenuLink.href = Object.values(menuList)[i].link;
        mainMenuDiv.appendChild(mainMenuLink);

        let mainMenuImg = document.createElement("div");
        mainMenuImg.classList.add("main_menu_img")
        mainMenuLink.appendChild(mainMenuImg);

        let imgName = "url(\"img/" + Object.keys(menuList)[i] + ".svg\")";
        mainMenuImg.style.maskImage = imgName;
        mainMenuImg.style.setProperty('-webkit-mask-image',imgName);
        mainMenuImg.style.WebkitMaskImage = imgName;

        let mainMenuTitle = document.createElement("p");
        mainMenuTitle.innerHTML = Object.values(menuList)[i].title;
        mainMenuLink.appendChild(mainMenuTitle);
    }
}

