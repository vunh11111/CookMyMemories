/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"login");

//main title
mainTitleFn(main,"login");

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

let loginButton = document.createElement("a");
loginButton.classList.add("login_button");
loginButton.href = "index.html";
loginButton.innerHTML = "ログイン";
main.appendChild(loginButton);

let hr = document.createElement("hr");
hr.classList.add("login_hr");
main.appendChild(hr);

let registerButton = document.createElement("a");
registerButton.classList.add("register_button");
registerButton.href = "registration.html";
registerButton.innerHTML = "アカウント未登録の方";
main.appendChild(registerButton);



