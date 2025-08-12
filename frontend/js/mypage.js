/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"mypage");

//main title
mainTitleFn(main,"mypage");

//form error
let formError = document.createElement("p");
formError.classList.add("form_error");
formError.innerHTML = "";
main.appendChild(formError);

//form
let changeMode = {
    name: 0,
    mail: 0,
    country: 0
};

let changeButton = {};

let formDiv = document.createElement("div");
formDiv.classList.add("form");
main.appendChild(formDiv);

let formName = document.createElement("div");
formDiv.appendChild(formName);

let formNameP = document.createElement("p");
formNameP.classList.add("form_item")
formNameP.innerHTML = "ニックネーム";
formName.appendChild(formNameP);

let formNameContent = document.createElement("p");
formNameContent.classList.add("form_content")
formNameContent.id = "form_name_content";
formNameContent.innerHTML = "*********"; //sample
formName.appendChild(formNameContent);

let formNameInput = document.createElement("input");
formNameInput.id = "form_name_input";
formNameInput.type = "text";
formNameInput.name = "text";
formName.appendChild(formNameInput);

changeButton.name = document.createElement("button");
changeButton.name.classList.add("button_hover");
changeButton.name.id = "form_name_button";
changeButton.name.innerHTML = "変更";
formName.appendChild(changeButton.name);

changeButton.name.addEventListener("click",() => {
    if ( changePermission(changeMode.name) ) hoverStyleChange( changeMode.name = changeMode.name ^ 1 );
    else return;

    if ( changeMode.name ) {
        document.getElementById("form_name_content").style.display = "none";
        document.getElementById("form_name_input").style.display = "block";
        document.getElementById("form_name_button").innerHTML = "OK";
        formNameInput.value = formNameContent.innerHTML;
    } else {
        document.getElementById("form_name_content").style.display = "block";
        document.getElementById("form_name_input").style.display = "none";
        document.getElementById("form_name_button").innerHTML = "変更";
    }
});

let formMail = document.createElement("div");
formDiv.appendChild(formMail);

let formMailP = document.createElement("p");
formMailP.classList.add("form_item")
formMailP.innerHTML = "メールアドレス";
formMail.appendChild(formMailP);

let formMailContent = document.createElement("p");
formMailContent.classList.add("form_content")
formMailContent.id = "form_mail_content";
formMailContent.innerHTML = "*********@**********"; //sample
formMail.appendChild(formMailContent);

let formMailInput = document.createElement("input");
formMailInput.id = "form_mail_input";
formMailInput.type = "text";
formMailInput.name = "text";
formMail.appendChild(formMailInput);

changeButton.mail = document.createElement("button");
changeButton.mail.classList.add("button_hover");
changeButton.mail.id = "form_mail_button";
changeButton.mail.innerHTML = "変更";
formMail.appendChild(changeButton.mail);

changeButton.mail.addEventListener("click",() => {
    if ( changePermission(changeMode.mail) ) hoverStyleChange( changeMode.mail = changeMode.mail ^ 1 );
    else return;

    if ( changeMode.mail ) {
        document.getElementById("form_mail_content").style.display = "none";
        document.getElementById("form_mail_input").style.display = "block";
        document.getElementById("form_mail_button").innerHTML = "OK";
        formMailInput.value = formMailContent.innerHTML;
    } else {
        document.getElementById("form_mail_content").style.display = "block";
        document.getElementById("form_mail_input").style.display = "none";
        document.getElementById("form_mail_button").innerHTML = "変更";
    }
});

let formCountry = document.createElement("div");
formDiv.appendChild(formCountry);

let formCountryP = document.createElement("p");
formCountryP.classList.add("form_item")
formCountryP.innerHTML = "母国";
formCountry.appendChild(formCountryP);

let formCountryContent = document.createElement("p");
formCountryContent.classList.add("form_content")
formCountryContent.id = "form_country_content";
formCountryContent.innerHTML = "日本"; //sample
formCountry.appendChild(formCountryContent);

let formCountrySelectDiv = document.createElement("div");
formCountrySelectDiv.id = "form_country_input";
formCountry.appendChild(formCountrySelectDiv);

let formCountrySelect = document.createElement("select");
formCountrySelectDiv.appendChild(formCountrySelect);

for ( var i = 0 ; i < country.length ; i++ ) {
    let formCountryOption = document.createElement("option");
    formCountryOption.value = country[i].value;
    formCountryOption.innerHTML = country[i].name;
    formCountrySelect.appendChild(formCountryOption);
}

changeButton.country = document.createElement("button");
changeButton.country.classList.add("button_hover");
changeButton.country.id = "form_country_button";
changeButton.country.innerHTML = "変更";
formCountry.appendChild(changeButton.country);

changeButton.country.addEventListener("click",() => {
    if ( changePermission(changeMode.country) ) hoverStyleChange( changeMode.country = changeMode.country ^ 1 );
    else return;

    if ( changeMode.country ) {
        document.getElementById("form_country_content").style.display = "none";
        document.getElementById("form_country_input").style.display = "block";
        document.getElementById("form_country_button").innerHTML = "OK";

        for ( var i = 0 ; i < formCountrySelect.options.length ; i++ ) {
            if ( formCountrySelect.options[i].innerHTML === formCountryContent.innerHTML ) {
                formCountrySelect.options[i].selected = true;
                break;
            }
        }
    } else {
        document.getElementById("form_country_content").style.display = "block";
        document.getElementById("form_country_input").style.display = "none";
        document.getElementById("form_country_button").innerHTML = "変更";
    }
});

const hoverStyleChange = (number) => {
    if ( number ) {
        for ( var i = 0 ; i < Object.values(changeButton).length ; i++ ) if ( !changeMode[Object.keys(changeButton)[i]] ) Object.values(changeButton)[i].classList.remove("button_hover");
    } else {
        for ( var i = 0 ; i < Object.values(changeButton).length ; i++ ) Object.values(changeButton)[i].classList.add("button_hover");
    }
};

const changePermission = (judgeNumber) => {
    let sum = 0;
    for ( var i = 0 ; i < Object.values(changeMode).length ; i++ ) if ( Object.values(changeMode)[i] === 1 ) sum++;
    if ( sum === judgeNumber ) return 1;
    else return 0;
};

let passchange = document.createElement("a");
passchange.classList.add("pass_change");
passchange.href = "passchange.html";
passchange.innerHTML = "パスワード変更"
main.appendChild(passchange);


