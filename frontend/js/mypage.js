// function saveToken(token) {
//     localStorage.setItem("jwtToken", token);
// }

// function getToken() {
//     return localStorage.getItem("jwtToken");
// }

// function logout() {
//     localStorage.removeItem("jwtToken");
//     window.location.href = "login.html";
// }

// async function authFetch(url, options = {}) {
//     const token = getToken();
//     if (!token) {
//         logout();
//         return;
//     }
//     if (!options.headers) options.headers = {};
//     options.headers["Authorization"] = `Bearer ${token}`;
//     return fetch(url, options);
// }

// let main = document.getElementsByTagName("main")[0];
// breadcrumbsFn(main, "mypage");
// mainTitleFn(main, "mypage");

// let formError = document.createElement("p");
// formError.classList.add("form_error");
// formError.innerHTML = "";
// main.appendChild(formError);

// let changeMode = { name: 0, mail: 0, country: 0 };
// let changeButton = {};
// let formDiv = document.createElement("div");
// formDiv.classList.add("form");
// main.appendChild(formDiv);

// let formName = document.createElement("div");
// formDiv.appendChild(formName);
// let formNameP = document.createElement("p");
// formNameP.classList.add("form_item");
// formNameP.innerHTML = "ニックネーム";
// formName.appendChild(formNameP);
// let formNameContent = document.createElement("p");
// formNameContent.classList.add("form_content");
// formNameContent.id = "form_name_content";
// formName.appendChild(formNameContent);
// let formNameInput = document.createElement("input");
// formNameInput.id = "form_name_input";
// formNameInput.type = "text";
// formNameInput.name = "text";
// formName.appendChild(formNameInput);
// changeButton.name = document.createElement("button");
// changeButton.name.classList.add("button_hover");
// changeButton.name.id = "form_name_button";
// changeButton.name.innerHTML = "変更";
// formName.appendChild(changeButton.name);
// changeButton.name.addEventListener("click", async () => {
//     if (changePermission(changeMode.name)) hoverStyleChange(changeMode.name = changeMode.name ^ 1);
//     else return;
//     if (changeMode.name) {
//         formNameContent.style.display = "none";
//         formNameInput.style.display = "block";
//         changeButton.name.innerHTML = "OK";
//         formNameInput.value = formNameContent.innerHTML;
//     } else {
//         await updateProfile({ username: formNameInput.value });
//         formNameContent.innerHTML = formNameInput.value;
//         formNameContent.style.display = "block";
//         formNameInput.style.display = "none";
//         changeButton.name.innerHTML = "変更";
//     }
// });

// let formMail = document.createElement("div");
// formDiv.appendChild(formMail);
// let formMailP = document.createElement("p");
// formMailP.classList.add("form_item");
// formMailP.innerHTML = "メールアドレス";
// formMail.appendChild(formMailP);
// let formMailContent = document.createElement("p");
// formMailContent.classList.add("form_content");
// formMailContent.id = "form_mail_content";
// formMail.appendChild(formMailContent);
// let formMailInput = document.createElement("input");
// formMailInput.id = "form_mail_input";
// formMailInput.type = "text";
// formMailInput.name = "text";
// formMail.appendChild(formMailInput);
// changeButton.mail = document.createElement("button");
// changeButton.mail.classList.add("button_hover");
// changeButton.mail.id = "form_mail_button";
// changeButton.mail.innerHTML = "変更";
// formMail.appendChild(changeButton.mail);
// changeButton.mail.addEventListener("click", async () => {
//     if (changePermission(changeMode.mail)) hoverStyleChange(changeMode.mail = changeMode.mail ^ 1);
//     else return;
//     if (changeMode.mail) {
//         formMailContent.style.display = "none";
//         formMailInput.style.display = "block";
//         changeButton.mail.innerHTML = "OK";
//         formMailInput.value = formMailContent.innerHTML;
//     } else {
//         await updateProfile({ email: formMailInput.value });
//         formMailContent.innerHTML = formMailInput.value;
//         formMailContent.style.display = "block";
//         formMailInput.style.display = "none";
//         changeButton.mail.innerHTML = "変更";
//     }
// });

// const countryList = [
//     { value: "Japan", name: "日本" },
//     { value: "Vietnam", name: "ベトナム" }
// ];

// let formCountry = document.createElement("div");
// formDiv.appendChild(formCountry);
// let formCountryP = document.createElement("p");
// formCountryP.classList.add("form_item");
// formCountryP.innerHTML = "母国";
// formCountry.appendChild(formCountryP);
// let formCountryContent = document.createElement("p");
// formCountryContent.classList.add("form_content");
// formCountryContent.id = "form_country_content";
// formCountry.appendChild(formCountryContent);
// let formCountrySelectDiv = document.createElement("div");
// formCountrySelectDiv.id = "form_country_input";
// formCountry.appendChild(formCountrySelectDiv);
// let formCountrySelect = document.createElement("select");
// formCountrySelectDiv.appendChild(formCountrySelect);
// countryList.forEach(c => {
//     let option = document.createElement("option");
//     option.value = c.value;
//     option.innerHTML = c.name;
//     formCountrySelect.appendChild(option);
// });
// changeButton.country = document.createElement("button");
// changeButton.country.classList.add("button_hover");
// changeButton.country.id = "form_country_button";
// changeButton.country.innerHTML = "変更";
// formCountry.appendChild(changeButton.country);
// changeButton.country.addEventListener("click", async () => {
//     if (changePermission(changeMode.country)) hoverStyleChange(changeMode.country = changeMode.country ^ 1);
//     else return;
//     if (changeMode.country) {
//         formCountryContent.style.display = "none";
//         formCountrySelectDiv.style.display = "block";
//         changeButton.country.innerHTML = "OK";
//         for (let i = 0; i < formCountrySelect.options.length; i++) {
//             if (formCountrySelect.options[i].innerHTML === formCountryContent.innerHTML) {
//                 formCountrySelect.options[i].selected = true;
//                 break;
//             }
//         }
//     } else {
//         const selectedValue = formCountrySelect.value;
//         const selectedName = formCountrySelect.options[formCountrySelect.selectedIndex].innerHTML;
//         await updateProfile({ country: selectedValue });
//         formCountryContent.innerHTML = selectedName;
//         formCountryContent.style.display = "block";
//         formCountrySelectDiv.style.display = "none";
//         changeButton.country.innerHTML = "変更";
//     }
// });

// const hoverStyleChange = (number) => {
//     if (number) {
//         for (let i = 0; i < Object.values(changeButton).length; i++)
//             if (!changeMode[Object.keys(changeButton)[i]]) Object.values(changeButton)[i].classList.remove("button_hover");
//     } else {
//         for (let i = 0; i < Object.values(changeButton).length; i++)
//             Object.values(changeButton)[i].classList.add("button_hover");
//     }
// };

// const changePermission = (judgeNumber) => {
//     let sum = 0;
//     for (let i = 0; i < Object.values(changeMode).length; i++)
//         if (Object.values(changeMode)[i] === 1) sum++;
//     return sum === judgeNumber ? 1 : 0;
// };

// let passchange = document.createElement("a");
// passchange.classList.add("pass_change");
// passchange.href = "passchange.html";
// passchange.innerHTML = "パスワード変更";
// main.appendChild(passchange);

// let logoutBtn = document.createElement("button");
// logoutBtn.innerHTML = "ログアウト";

// // Style chung
// logoutBtn.style.backgroundColor = "#f44336"; // đỏ
// logoutBtn.style.color = "white";
// logoutBtn.style.border = "none";
// logoutBtn.style.padding = "15px 40px";
// logoutBtn.style.fontSize = "18px";
// logoutBtn.style.borderRadius = "8px";
// logoutBtn.style.cursor = "pointer";

// // Đặt vị trí chính giữa dưới màn hình
// logoutBtn.style.position = "relative";
// logoutBtn.style.bottom = "30px";
// logoutBtn.style.left = "50%";
// logoutBtn.style.transform = "translateX(-50%)";
// logoutBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// // Hiệu ứng hover
// logoutBtn.onmouseover = () => logoutBtn.style.backgroundColor = "#d32f2f";
// logoutBtn.onmouseout = () => logoutBtn.style.backgroundColor = "#f44336";

// // Thêm nút vào body
// document.body.appendChild(logoutBtn);

// // Gắn sự kiện logout
// logoutBtn.onclick = function() {
//     localStorage.removeItem("jwtToken");
//     window.location.href = "/login.html";
// };

// main.appendChild(logoutBtn);
// logoutBtn.addEventListener("click", () => logout());

// async function updateProfile(data) {
//     try {
//         // Lấy thông tin hiện tại
//         const profileRes = await authFetch("http://localhost:8080/api/users/profile");
//         if (!profileRes.ok) {
//             alert("Không lấy được thông tin người dùng!");
//             return;
//         }
//         const profile = await profileRes.json();

//         // Gộp dữ liệu cũ với dữ liệu mới
//         const updatedData = {
//             email: profile.email,  // giữ nguyên email
//             country: data.country || profile.country // dùng country mới nếu có
//         };

//         // Gửi PUT request
//         const res = await authFetch("http://localhost:8080/api/users/profile", {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedData)
//         });

//         if (res && res.ok) {
//             alert("Cập nhật thành công!");
//         } else {
//             alert("Cập nhật thất bại!");
//         }
//     } catch (err) {
//         console.error("Lỗi khi cập nhật profile:", err);
//         alert("Có lỗi xảy ra!");
//     }
// }


// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const res = await authFetch("http://localhost:8080/api/users/profile", { method: "GET" });
//         if (res && res.ok) {
//             const user = await res.json();
//             formNameContent.innerHTML = user.username || "";
//             formMailContent.innerHTML = user.email || "";
//             const found = countryList.find(c => c.value === user.country);
//             formCountryContent.innerHTML = found ? found.name : user.country || "";
//         } else {
//             if (!res || res.status === 401) logout();
//         }
//     } catch (err) {
//         console.error("Lỗi khi lấy thông tin profile:", err);
//         logout();
//     }
// });
//mypage.js
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

let main = document.getElementsByTagName("main")[0];
breadcrumbsFn(main, "mypage");
mainTitleFn(main, "mypage");

let formError = document.createElement("p");
formError.classList.add("form_error");
formError.innerHTML = "";
main.appendChild(formError);

let changeMode = { name: 0, mail: 0, country: 0 };
let changeButton = {};
let formDiv = document.createElement("div");
formDiv.classList.add("form");
main.appendChild(formDiv);

let formName = document.createElement("div");
formDiv.appendChild(formName);
let formNameP = document.createElement("p");
formNameP.classList.add("form_item");
formNameP.innerHTML = "ニックネーム";
formName.appendChild(formNameP);
let formNameContent = document.createElement("p");
formNameContent.classList.add("form_content");
formNameContent.id = "form_name_content";
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
changeButton.name.addEventListener("click", async () => {
    if (changePermission(changeMode.name)) hoverStyleChange(changeMode.name = changeMode.name ^ 1);
    else return;
    if (changeMode.name) {
        formNameContent.style.display = "none";
        formNameInput.style.display = "block";
        changeButton.name.innerHTML = "OK";
        formNameInput.value = formNameContent.innerHTML;
    } else {
        await updateProfile({ username: formNameInput.value });
        formNameContent.innerHTML = formNameInput.value;
        formNameContent.style.display = "block";
        formNameInput.style.display = "none";
        changeButton.name.innerHTML = "変更";
    }
});

let formMail = document.createElement("div");
formDiv.appendChild(formMail);
let formMailP = document.createElement("p");
formMailP.classList.add("form_item");
formMailP.innerHTML = "メールアドレス";
formMail.appendChild(formMailP);
let formMailContent = document.createElement("p");
formMailContent.classList.add("form_content");
formMailContent.id = "form_mail_content";
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
changeButton.mail.addEventListener("click", async () => {
    if (changePermission(changeMode.mail)) hoverStyleChange(changeMode.mail = changeMode.mail ^ 1);
    else return;
    if (changeMode.mail) {
        formMailContent.style.display = "none";
        formMailInput.style.display = "block";
        changeButton.mail.innerHTML = "OK";
        formMailInput.value = formMailContent.innerHTML;
    } else {
        await updateProfile({ email: formMailInput.value });
        formMailContent.innerHTML = formMailInput.value;
        formMailContent.style.display = "block";
        formMailInput.style.display = "none";
        changeButton.mail.innerHTML = "変更";
    }
});

const countryList = [
    { value: "Japan", name: "日本" },
    { value: "Vietnam", name: "ベトナム" }
];

let formCountry = document.createElement("div");
formDiv.appendChild(formCountry);
let formCountryP = document.createElement("p");
formCountryP.classList.add("form_item");
formCountryP.innerHTML = "母国";
formCountry.appendChild(formCountryP);
let formCountryContent = document.createElement("p");
formCountryContent.classList.add("form_content");
formCountryContent.id = "form_country_content";
formCountry.appendChild(formCountryContent);
let formCountrySelectDiv = document.createElement("div");
formCountrySelectDiv.id = "form_country_input";
formCountry.appendChild(formCountrySelectDiv);
let formCountrySelect = document.createElement("select");
formCountrySelectDiv.appendChild(formCountrySelect);
countryList.forEach(c => {
    let option = document.createElement("option");
    option.value = c.value;
    option.innerHTML = c.name;
    formCountrySelect.appendChild(option);
});
changeButton.country = document.createElement("button");
changeButton.country.classList.add("button_hover");
changeButton.country.id = "form_country_button";
changeButton.country.innerHTML = "変更";
formCountry.appendChild(changeButton.country);
changeButton.country.addEventListener("click", async () => {
    if (changePermission(changeMode.country)) hoverStyleChange(changeMode.country = changeMode.country ^ 1);
    else return;
    if (changeMode.country) {
        formCountryContent.style.display = "none";
        formCountrySelectDiv.style.display = "block";
        changeButton.country.innerHTML = "OK";
        for (let i = 0; i < formCountrySelect.options.length; i++) {
            if (formCountrySelect.options[i].innerHTML === formCountryContent.innerHTML) {
                formCountrySelect.options[i].selected = true;
                break;
            }
        }
    } else {
        const selectedValue = formCountrySelect.value;
        const selectedName = formCountrySelect.options[formCountrySelect.selectedIndex].innerHTML;
        await updateProfile({ country: selectedValue });
        formCountryContent.innerHTML = selectedName;
        formCountryContent.style.display = "block";
        formCountrySelectDiv.style.display = "none";
        changeButton.country.innerHTML = "変更";
    }
});

const hoverStyleChange = (number) => {
    if (number) {
        for (let i = 0; i < Object.values(changeButton).length; i++)
            if (!changeMode[Object.keys(changeButton)[i]]) Object.values(changeButton)[i].classList.remove("button_hover");
    } else {
        for (let i = 0; i < Object.values(changeButton).length; i++)
            Object.values(changeButton)[i].classList.add("button_hover");
    }
};

const changePermission = (judgeNumber) => {
    let sum = 0;
    for (let i = 0; i < Object.values(changeMode).length; i++)
        if (Object.values(changeMode)[i] === 1) sum++;
    return sum === judgeNumber ? 1 : 0;
};

// Tạo nút đổi mật khẩu với style đẹp
let passchange = document.createElement("button");
passchange.classList.add("pass_change");
passchange.innerHTML = "パスワード変更";

// Style cho nút đổi mật khẩu
passchange.style.backgroundColor = "rgb(134,74,43)"; // xanh lá
passchange.style.color = "white";
passchange.style.border = "none";
passchange.style.padding = "10px 50px";
passchange.style.fontSize = "18px";
passchange.style.borderRadius = "8px";
passchange.style.cursor = "pointer";
passchange.style.marginBottom = "40px";
passchange.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// // Hiệu ứng hover cho nút đổi mật khẩu
// passchange.onmouseover = () => passchange.style.backgroundColor = "#45a049";
// passchange.onmouseout = () => passchange.style.backgroundColor = "#4CAF50";

// Event click để chuyển trang
passchange.addEventListener("click", () => {
    window.location.href = "passchange.html";
});

main.appendChild(passchange);

// Tạo nút logout
let logoutBtn = document.createElement("button");
logoutBtn.innerHTML = "ログアウト";

logoutBtn.style.backgroundColor = "rgb(134,74,43)"; // đỏ
logoutBtn.style.color = "white";
logoutBtn.style.border = "none";
logoutBtn.style.padding = "15px 40px";
logoutBtn.style.fontSize = "18px";
logoutBtn.style.borderRadius = "8px";
logoutBtn.style.cursor = "pointer";
logoutBtn.style.marginLeft = "20px";
logoutBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// // Đặt vị trí chính giữa dưới màn hình
logoutBtn.style.position = "relative";
logoutBtn.style.bottom = "30px";
logoutBtn.style.left = "48.7%";
logoutBtn.style.transform = "translateX(-50%)";
logoutBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

// // Hiệu ứng hover
// logoutBtn.onmouseover = () => logoutBtn.style.backgroundColor = "#d32f2f";
// logoutBtn.onmouseout = () => logoutBtn.style.backgroundColor = "#f44336";

// // Hiệu ứng hover cho logout
// logoutBtn.onmouseover = () => logoutBtn.style.backgroundColor = "#d32f2f";
// logoutBtn.onmouseout = () => logoutBtn.style.backgroundColor = "#f44336";

// Gắn sự kiện logout
logoutBtn.addEventListener("click", () => logout());

main.appendChild(logoutBtn);

async function updateProfile(data) {
    try {
        // Lấy thông tin hiện tại
        const profileRes = await authFetch("http://localhost:8080/api/users/profile");
        if (!profileRes.ok) {
            alert("Không lấy được thông tin người dùng!");
            return;
        }
        const profile = await profileRes.json();

        // Gộp dữ liệu cũ với dữ liệu mới
        const updatedData = {
            email: profile.email,  // giữ nguyên email
            country: data.country || profile.country // dùng country mới nếu có
        };

        // Gửi PUT request
        const res = await authFetch("http://localhost:8080/api/users/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });

        if (res && res.ok) {
            alert("Cập nhật thành công!");
        } else {
            alert("Cập nhật thất bại!");
        }
    } catch (err) {
        console.error("Lỗi khi cập nhật profile:", err);
        alert("Có lỗi xảy ra!");
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await authFetch("http://localhost:8080/api/users/profile", { method: "GET" });
        if (res && res.ok) {
            const user = await res.json();
            formNameContent.innerHTML = user.username || "";
            formMailContent.innerHTML = user.email || "";
            const found = countryList.find(c => c.value === user.country);
            formCountryContent.innerHTML = found ? found.name : user.country || "";
        } else {
            if (!res || res.status === 401) logout();
        }
    } catch (err) {
        console.error("Lỗi khi lấy thông tin profile:", err);
        logout();
    }
});
