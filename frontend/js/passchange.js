/***** main *****/
let main = document.getElementsByTagName("main")[0];

//breadcrumbs
breadcrumbsFn(main,"mypage","passchange");

//main title
mainTitleFn(main,"passchange");

//form error
let formError = document.createElement("p");
formError.classList.add("form_error");
formError.innerHTML = "";
main.appendChild(formError);

//form
let formDiv = document.createElement("div");
formDiv.classList.add("form");
main.appendChild(formDiv);

let formOldPassword = document.createElement("div");
formDiv.appendChild(formOldPassword);

let formOldPasswordP = document.createElement("p");
formOldPasswordP.innerHTML = "前のパスワード";
formOldPassword.appendChild(formOldPasswordP);

let formOldPasswordInput = document.createElement("input");
formOldPasswordInput.type = "password";
formOldPasswordInput.name = "password";
formOldPassword.appendChild(formOldPasswordInput);

let formNewPassword = document.createElement("div");
formDiv.appendChild(formNewPassword);

let formNewPasswordP = document.createElement("p");
formNewPasswordP.innerHTML = "新しいパスワード";
formNewPassword.appendChild(formNewPasswordP);

let formNewPasswordInput = document.createElement("input");
formNewPasswordInput.type = "password";
formNewPasswordInput.name = "password";
formNewPasswordInput.autocomplete = "off";
formNewPassword.appendChild(formNewPasswordInput);

let formNewPassword2 = document.createElement("div");
formDiv.appendChild(formNewPassword2);

let formNewPassword2P = document.createElement("p");
formNewPassword2P.innerHTML = "新しいパスワード(確認用)";
formNewPassword2.appendChild(formNewPassword2P);

let formNewPassword2Input = document.createElement("input");
formNewPassword2Input.type = "password";
formNewPassword2Input.name = "password";
formNewPassword2Input.autocomplete = "off";
formNewPassword2.appendChild(formNewPassword2Input);

let registerButton = document.createElement("a");
registerButton.classList.add("register_button");
registerButton.innerHTML = "変更";

registerButton.addEventListener("click",() => {
    if ( formOldPasswordInput.value === "" ) formError.innerHTML = "古いパスワードを入力してください";
    else if ( formNewPasswordInput.value === "" ) formError.innerHTML = "新しいパスワードを入力してください";
    else if ( formNewPassword2Input.value === "" ) formError.innerHTML = "新しいパスワード(確認用)を入力してください";
    else if ( formNewPasswordInput.value !== formNewPassword2Input.value ) formError.innerHTML = "新しいパスワードが一致していません";
    else formError.innerHTML = "";
});

main.appendChild(registerButton);



