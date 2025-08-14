// // ===== Hàm quản lý Token =====
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

// // ===== Hàm fetch có kèm Authorization =====
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

// // ===== Khi load trang =====
// document.addEventListener("DOMContentLoaded", async () => {
//     const main = document.querySelector("main");
//     main.innerHTML = `
//         <h1>プロフィール</h1>
//         <div class="profile-container">
//             <label for="username">Username:</label>
//             <input type="text" id="username" disabled>

//             <label for="email">Email:</label>
//             <input type="email" id="email">

//             <label for="country">Country</label>
//             <input type="text" id="country">

//             <button id="saveProfileBtn">変更</button>
//         </div>
//     `;
//     const usernameEl = document.getElementById("username");
//     const emailEl = document.getElementById("email");
//     const countryEl = document.getElementById("country");
//     const saveBtn = document.getElementById("saveProfileBtn");

//     if (!usernameEl || !emailEl || !countryEl || !saveBtn) {
//         console.error("Không tìm thấy phần tử HTML cần thiết trên trang profile");
//         return;
//     }

//     try {
//         const res = await authFetch("http://localhost:8080/api/users/profile", {
//             method: "GET"
//         });
//         if (res && res.ok) {
//             const user = await res.json();
//             usernameEl.value = user.username || "";
//             emailEl.value = user.email || "";
//             countryEl.value = user.country || "";
//         } else {
//             if (!res || res.status === 401) logout();
//         }
//     } catch (err) {
//         console.error("Lỗi khi lấy thông tin profile:", err);
//         logout();
//     }

//     // ===== Sự kiện nút Lưu =====
//     saveBtn.addEventListener("click", async () => {
//         const email = emailEl.value;
//         const country = countryEl.value;

//         try {
//             const res = await authFetch("http://localhost:8080/api/users/profile", {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, country })
//             });

//             if (res && res.ok) {
//                 alert("Cập nhật thành công!");
//             } else {
//                 alert("Cập nhật thất bại!");
//             }
//         } catch (err) {
//             console.error("Lỗi khi cập nhật profile:", err);
//             alert("Có lỗi xảy ra khi cập nhật!");
//         }
//     });
// });

// ===== Hàm quản lý Token =====
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

// ===== Hàm fetch có kèm Authorization =====
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

// ===== Khi load trang =====
document.addEventListener("DOMContentLoaded", async () => {
    const main = document.querySelector("main");
    main.innerHTML = `
        <h1>プロフィール</h1>
        <div class="profile-container">
            <label for="username">Username:</label>
            <input type="text" id="username" disabled>

            <label for="email">Email:</label>
            <input type="email" id="email">

            <label for="country">Country</label>
            <input type="text" id="country">

            <button id="saveProfileBtn">変更</button>
            <button id="logoutBtn" style="margin-left:10px; background-color:#f44336; color:white;">ログアウト</button>
        </div>
    `;
    const usernameEl = document.getElementById("username");
    const emailEl = document.getElementById("email");
    const countryEl = document.getElementById("country");
    const saveBtn = document.getElementById("saveProfileBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (!usernameEl || !emailEl || !countryEl || !saveBtn || !logoutBtn) {
        console.error("Không tìm thấy phần tử HTML cần thiết trên trang profile");
        return;
    }

    try {
        const res = await authFetch("http://localhost:8080/api/users/profile", {
            method: "GET"
        });
        if (res && res.ok) {
            const user = await res.json();
            usernameEl.value = user.username || "";
            emailEl.value = user.email || "";
            countryEl.value = user.country || "";
        } else {
            if (!res || res.status === 401) logout();
        }
    } catch (err) {
        console.error("Lỗi khi lấy thông tin profile:", err);
        logout();
    }

    // ===== Sự kiện nút Lưu =====
    saveBtn.addEventListener("click", async () => {
        const email = emailEl.value;
        const country = countryEl.value;

        try {
            const res = await authFetch("http://localhost:8080/api/users/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, country })
            });

            if (res && res.ok) {
                alert("Cập nhật thành công!");
            } else {
                alert("Cập nhật thất bại!");
            }
        } catch (err) {
            console.error("Lỗi khi cập nhật profile:", err);
            alert("Có lỗi xảy ra khi cập nhật!");
        }
    });

    // ===== Sự kiện nút Logout =====
    logoutBtn.addEventListener("click", () => {
        logout();
    });
});
