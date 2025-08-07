/***** main *****/
let main = document.getElementsByTagName("main")[0];

//main top
let mainTop = document.createElement("div");
mainTop.classList.add("main_top");
main.appendChild(mainTop);

let mainTopImg = document.createElement("img");
mainTopImg.src = "/img/main_top.png";
mainTop.appendChild(mainTopImg);

let mainTopText = document.createElement("p");
mainTopText.innerHTML = "あい<br>うえお田";
mainTop.appendChild(mainTopText);

//main content
let mainContentTitle = document.createElement("p");
mainContentTitle.classList.add("main_content_title");
mainContentTitle.innerHTML = "abc";
main.appendChild(mainContentTitle);

let mainContent = document.createElement("p");
mainContent.classList.add("main_content");
mainContent.innerHTML = "abc";
main.appendChild(mainContent);

// main menu
let mainMenuDiv = document.createElement("div");
mainMenuDiv.classList.add("main_menu");
main.appendChild(mainMenuDiv);

for ( var i = 0 ; i < menuList.length ; i++ ) {
    if ( menuList[i].type === 'search' ) {
        let mainMenuLink = document.createElement("a");
        mainMenuLink.href = "/" + menuList[i].link;
        mainMenuDiv.appendChild(mainMenuLink);

        let mainMenuImg = document.createElement("div");
        mainMenuImg.classList.add("main_menu_img")
        mainMenuLink.appendChild(mainMenuImg);

        let imgName = "url(\"/img/" + menuList[i].name + ".svg\")";
        mainMenuImg.style.maskImage = imgName;
        mainMenuImg.style.setProperty('-webkit-mask-image',imgName);
        mainMenuImg.style.WebkitMaskImage = imgName;

        let mainMenuTitle = document.createElement("p");
        mainMenuTitle.innerHTML = menuList[i].title;
        mainMenuLink.appendChild(mainMenuTitle);
    }
}

