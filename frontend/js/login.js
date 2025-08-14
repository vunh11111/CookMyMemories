//login.js
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
formNameInput.type = "text";
formNameInput.name = "text";
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

// loginButton.addEventListener("click", async function (e) {
//     e.preventDefault();

//     const username = formNameInput.value.trim();
//     const password = formPasswordInput.value.trim();

//     if (!username || !password) {
//         formError.innerHTML = "Vui lòng nhập đầy đủ thông tin.";
//         return;
//     }

//     try {
//         const response = await fetch("http://localhost:8080/api/users/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, password })
//         });

//         if (response.ok) {
//             // const data = await response.json();
//             // saveToken(data.token); // từ auth.js
//             localStorage.setItem("token", response.token);
//             window.location.href = "profile.html";
//         } else {
//             const err = await response.text();
//             formError.innerHTML = err || "Đăng nhập thất bại.";
//         }
//     } catch (error) {
//         console.error(error);
//         formError.innerHTML = "Có lỗi xảy ra khi kết nối server.";
//     }
// });

// loginButton.addEventListener("click", async function (e) {
//     e.preventDefault();
//     formError.innerHTML = "";

//     const username = formNameInput.value.trim();
//     const password = formPasswordInput.value.trim();

//     if (!username || !password) {
//         formError.innerHTML = "Vui lòng nhập đầy đủ thông tin.";
//         return;
//     }

//     try {
//         const response = await fetch("http://localhost:8080/api/users/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, password })
//         });

//         if (response.ok) {
//             // parse JSON body
//             let data;
//             try {
//                 data = await response.json();
//             } catch (err) {
//                 console.error("Không parse được JSON từ response login:", err);
//                 formError.innerHTML = "Server trả về dữ liệu không hợp lệ.";
//                 return;
//             }

//             // tìm token trong các trường thường gặp
//             const token = data.token || data.jwt || data.accessToken || data.jwtToken;
//             if (!token) {
//                 console.log("Login response (no token):", data);
//                 formError.innerHTML = "Đăng nhập thất bại: server không trả token.";
//                 return;
//             }

//             // LƯU token cùng key với profile.js
//             localStorage.setItem("jwtToken", token);

//             // chuyển hướng tới profile
//             window.location.href = "profile.html";
//         } else {
//             // lấy message lỗi (có thể là text hoặc JSON)
//             let errText = await response.text();
//             try {
//                 const errObj = JSON.parse(errText);
//                 errText = errObj.message || errObj.error || JSON.stringify(errObj);
//             } catch (e) { /* giữ nguyên errText nếu không phải JSON */ }
//             formError.innerHTML = errText || "Đăng nhập thất bại.";
//         }
//     } catch (error) {
//         console.error("Lỗi khi gọi API login:", error);
//         formError.innerHTML = "Có lỗi xảy ra khi kết nối server.";
//     }
// });

loginButton.addEventListener("click", async function (e) {
    e.preventDefault();
    formError.innerHTML = "";

    const username = formNameInput.value.trim();
    const password = formPasswordInput.value.trim();

    if ( !username ) {
        formError.innerHTML = "ニックネームを入力してください．";
        return;
    } else if ( !password ) {
        formError.innerHTML = "パスワードを入力してください．";
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json(); // Backend giờ trả { token: "..." }
            if (!data.token) {
                console.error("トークンなしのログイン応答:", data);
                formError.innerHTML = "ログイン失敗: サーバーがトークンを返しません。";
                return;
            }

            // Lưu token (cùng key với profile.js)
            window.auth.onLoginSuccess(data.token);
        } else {
            let errText = await response.text();
            try {
                const errObj = JSON.parse(errText);
                errText = errObj.message || errObj.error || JSON.stringify(errObj);
            } catch (_) {}
            formError.innerHTML = errText || "ログインに失敗しました";
        }
    } catch (error) {
        console.error("APIログイン時のエラー:", error);
        formError.innerHTML = "サーバー接続時にエラーが発生しました。";
    }
});



