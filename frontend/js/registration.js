/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"registration");

//main title
mainTitleFn(main,"registration");

//form error
let formError = document.createElement("p");
formError.classList.add("form_error");
formError.innerHTML = "";
main.appendChild(formError);

//form
let formDiv = document.createElement("div");
formDiv.classList.add("form");
main.appendChild(formDiv);

let formName = document.createElement("div");
formDiv.appendChild(formName);

let formNameP = document.createElement("p");
formNameP.innerHTML = "ニックネーム";
formName.appendChild(formNameP);

let formNameInput = document.createElement("input");
formNameInput.type = "search";
formNameInput.name = "search";
formName.appendChild(formNameInput);

let formPassword = document.createElement("div");
formDiv.appendChild(formPassword);

let formPasswordP = document.createElement("p");
formPasswordP.innerHTML = "パスワード";
formPassword.appendChild(formPasswordP);

let formPasswordInput = document.createElement("input");
formPasswordInput.type = "password";
formPasswordInput.name = "password";
formPasswordInput.autocomplete = "off";
formPassword.appendChild(formPasswordInput);

let formPassword2 = document.createElement("div");
formDiv.appendChild(formPassword2);

let formPassword2P = document.createElement("p");
formPassword2P.innerHTML = "パスワード(確認用)";
formPassword2.appendChild(formPassword2P);

let formPassword2Input = document.createElement("input");
formPassword2Input.type = "password";
formPassword2Input.name = "password";
formPassword2Input.autocomplete = "off";
formPassword2.appendChild(formPassword2Input);

let formCountry = document.createElement("div");
formCountry.classList.add("formCountry");
formDiv.appendChild(formCountry);

let formCountryP = document.createElement("p");
formCountryP.innerHTML = "母国";
formCountry.appendChild(formCountryP);

let formCountrySelect = document.createElement("select");
formCountry.appendChild(formCountrySelect);

for ( var i = 0 ; i < country.length ; i++ ) {
    let formCountryOption = document.createElement("option");
    formCountryOption.value = country[i].value;
    formCountryOption.innerHTML = country[i].name;
    formCountrySelect.appendChild(formCountryOption);
}

let registerButton = document.createElement("a");
registerButton.classList.add("register_button");
registerButton.href = "index.html";
registerButton.innerHTML = "登録";
main.appendChild(registerButton);



