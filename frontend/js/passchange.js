// /***** main *****/
// let main = document.getElementsByTagName("main")[0];

// //breadcrumbs
// breadcrumbsFn(main,"mypage","passchange");

// //main title
// mainTitleFn(main,"passchange");

// //form error
// let formError = document.createElement("p");
// formError.classList.add("form_error");
// formError.innerHTML = "";
// main.appendChild(formError);

// //form
// let formDiv = document.createElement("div");
// formDiv.classList.add("form");
// main.appendChild(formDiv);

// let formOldPassword = document.createElement("div");
// formDiv.appendChild(formOldPassword);

// let formOldPasswordP = document.createElement("p");
// formOldPasswordP.innerHTML = "前のパスワード";
// formOldPassword.appendChild(formOldPasswordP);

// let formOldPasswordInput = document.createElement("input");
// formOldPasswordInput.type = "password";
// formOldPasswordInput.name = "password";
// formOldPassword.appendChild(formOldPasswordInput);

// let formNewPassword = document.createElement("div");
// formDiv.appendChild(formNewPassword);

// let formNewPasswordP = document.createElement("p");
// formNewPasswordP.innerHTML = "新しいパスワード";
// formNewPassword.appendChild(formNewPasswordP);

// let formNewPasswordInput = document.createElement("input");
// formNewPasswordInput.type = "password";
// formNewPasswordInput.name = "password";
// formNewPasswordInput.autocomplete = "off";
// formNewPassword.appendChild(formNewPasswordInput);

// let formNewPassword2 = document.createElement("div");
// formDiv.appendChild(formNewPassword2);

// let formNewPassword2P = document.createElement("p");
// formNewPassword2P.innerHTML = "新しいパスワード(確認用)";
// formNewPassword2.appendChild(formNewPassword2P);

// let formNewPassword2Input = document.createElement("input");
// formNewPassword2Input.type = "password";
// formNewPassword2Input.name = "password";
// formNewPassword2Input.autocomplete = "off";
// formNewPassword2.appendChild(formNewPassword2Input);

// let registerButton = document.createElement("a");
// registerButton.classList.add("register_button");
// registerButton.innerHTML = "変更";

// registerButton.addEventListener("click",() => {
//     if ( formOldPasswordInput.value === "" ) formError.innerHTML = "古いパスワードを入力してください";
//     else if ( formNewPasswordInput.value === "" ) formError.innerHTML = "新しいパスワードを入力してください";
//     else if ( formNewPassword2Input.value === "" ) formError.innerHTML = "新しいパスワード(確認用)を入力してください";
//     else if ( formNewPasswordInput.value !== formNewPassword2Input.value ) formError.innerHTML = "新しいパスワードが一致していません";
//     else formError.innerHTML = "";
// });

// main.appendChild(registerButton);
//passchange.js

// Utility functions để xử lý JWT token
function saveToken(token) {
    localStorage.setItem("jwtToken", token);
}

function getToken() {
    return localStorage.getItem("jwtToken");
}

function logout() {
    localStorage.removeItem("jwtToken");
    window.location.href = "login.html";
}

async function authFetch(url, options = {}) {
    const token = getToken();
    if (!token) {
        logout();
        return;
    }
    if (!options.headers) options.headers = {};
    options.headers["Authorization"] = `Bearer ${token}`;
    return fetch(url, options);
}

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

// Form mật khẩu cũ
let formOldPassword = document.createElement("div");
formDiv.appendChild(formOldPassword);

let formOldPasswordP = document.createElement("p");
formOldPasswordP.innerHTML = "前のパスワード";
formOldPassword.appendChild(formOldPasswordP);

let formOldPasswordInput = document.createElement("input");
formOldPasswordInput.type = "password";
formOldPasswordInput.name = "password";
formOldPasswordInput.placeholder = "現在のパスワードを入力";
formOldPassword.appendChild(formOldPasswordInput);

// Form mật khẩu mới
let formNewPassword = document.createElement("div");
formDiv.appendChild(formNewPassword);

let formNewPasswordP = document.createElement("p");
formNewPasswordP.innerHTML = "新しいパスワード";
formNewPassword.appendChild(formNewPasswordP);

let formNewPasswordInput = document.createElement("input");
formNewPasswordInput.type = "password";
formNewPasswordInput.name = "password";
formNewPasswordInput.autocomplete = "off";
formNewPasswordInput.placeholder = "新しいパスワードを入力";
formNewPassword.appendChild(formNewPasswordInput);

// Form xác nhận mật khẩu mới
let formNewPassword2 = document.createElement("div");
formDiv.appendChild(formNewPassword2);

let formNewPassword2P = document.createElement("p");
formNewPassword2P.innerHTML = "新しいパスワード(確認用)";
formNewPassword2.appendChild(formNewPassword2P);

let formNewPassword2Input = document.createElement("input");
formNewPassword2Input.type = "password";
formNewPassword2Input.name = "password";
formNewPassword2Input.autocomplete = "off";
formNewPassword2Input.placeholder = "新しいパスワードを再入力";
formNewPassword2.appendChild(formNewPassword2Input);

// Nút đổi mật khẩu
let changePasswordButton = document.createElement("button");
changePasswordButton.classList.add("register_button");
changePasswordButton.innerHTML = "変更";

// Style cho nút
// changePasswordButton.style.backgroundColor = "rgb(134,74,43)";
// changePasswordButton.style.color = "white";
// changePasswordButton.style.border = "none";
// changePasswordButton.style.padding = "15px 40px";
// changePasswordButton.style.fontSize = "18px";
// changePasswordButton.style.borderRadius = "8px";
// changePasswordButton.style.cursor = "pointer";
// changePasswordButton.style.marginTop = "20px";
// changePasswordButton.style.marginRight = "10px";
// changePasswordButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// changePasswordButton.style.position = "relative";
// changePasswordButton.style.bottom = "30px";
// changePasswordButton.style.left = "48.7%";
// changePasswordButton.style.transform = "translateX(-50%)";

// Hàm đổi mật khẩu
async function changePassword() {
    const oldPassword = formOldPasswordInput.value.trim();
    const newPassword = formNewPasswordInput.value.trim();
    const confirmPassword = formNewPassword2Input.value.trim();

    // Validation
    if (!oldPassword) {
        formError.innerHTML = "古いパスワードを入力してください";
        formError.style.color = "#f44336";
        return;
    }
    
    if (!newPassword) {
        formError.innerHTML = "新しいパスワードを入力してください";
        formError.style.color = "#f44336";
        return;
    }
    
    if (!confirmPassword) {
        formError.innerHTML = "新しいパスワード(確認用)を入力してください";
        formError.style.color = "#f44336";
        return;
    }
    
    if (newPassword !== confirmPassword) {
        formError.innerHTML = "新しいパスワードが一致していません";
        formError.style.color = "#f44336";
        return;
    }

    if (newPassword.length < 6) {
        formError.innerHTML = "新しいパスワードは6文字以上で入力してください";
        formError.style.color = "#f44336";
        return;
    }

    if (oldPassword === newPassword) {
        formError.innerHTML = "新しいパスワードは現在のパスワードと異なる必要があります";
        formError.style.color = "#f44336";
        return;
    }

    try {
        // Disable button và show loading
        changePasswordButton.disabled = true;
        changePasswordButton.innerHTML = "変更中...";
        formError.innerHTML = "";

        // Gửi API request
        const response = await authFetch("http://localhost:8080/api/users/change-password", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                oldPassword2: oldPassword,
                newPassword2: newPassword
            })
        });

        if (response && response.ok) {
            formError.innerHTML = "パスワードが正常に変更されました！";
            formError.style.color = "#4CAF50";
            
            // Clear form
            formOldPasswordInput.value = "";
            formNewPasswordInput.value = "";
            formNewPassword2Input.value = "";
            
            // Chuyển về mypage sau 2 giây
            setTimeout(() => {
                window.location.href = "mypage.html";
            }, 2000);
            
        } else {
            const errorText = await response.text();
            if (response.status === 401) {
                formError.innerHTML = "認証が失敗しました。再ログインしてください";
                formError.style.color = "#f44336";
                setTimeout(() => logout(), 2000);
            } else if (response.status === 400) {
                formError.innerHTML = "現在のパスワードが正しくありません";
                formError.style.color = "#f44336";
            } else {
                formError.innerHTML = "パスワード変更に失敗しました: " + errorText;
                formError.style.color = "#f44336";
            }
        }
        
    } catch (error) {
        console.error("Password change error:", error);
        formError.innerHTML = "エラーが発生しました。もう一度お試しください";
        formError.style.color = "#f44336";
    } finally {
        // Re-enable button
        changePasswordButton.disabled = false;
        changePasswordButton.innerHTML = "変更";
    }
}

// Event listener cho nút đổi mật khẩu
changePasswordButton.addEventListener("click", changePassword);

// Nút quay lại
let backButton = document.createElement("button");
backButton.innerHTML = "戻る";
backButton.style.backgroundColor = "rgb(134,74,43)"; // xám
backButton.style.color = "white";
backButton.style.border = "none";
backButton.style.padding = "15px 40px";
backButton.style.fontSize = "18px";
backButton.style.borderRadius = "8px";
backButton.style.cursor = "pointer";
backButton.style.marginTop = "20px";
// backButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

backButton.style.position = "relative";
backButton.style.bottom = "30px";
backButton.style.left = "50%";
backButton.style.transform = "translateX(-50%)";
backButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

backButton.addEventListener("click", () => {
    window.location.href = "mypage.html";
});

// Thêm các nút vào main
main.appendChild(changePasswordButton);
main.appendChild(backButton);

// Enter key để submit form
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        changePassword();
    }
});

// Focus vào input đầu tiên khi trang load
document.addEventListener("DOMContentLoaded", () => {
    formOldPasswordInput.focus();
});