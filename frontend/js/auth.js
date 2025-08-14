// Lưu token sau khi đăng nhập
function saveToken(token) {
    localStorage.setItem("jwtToken", token);
}

// Lấy token
function getToken() {
    return localStorage.getItem("jwtToken");
}

// Xóa token khi đăng xuất
function logout() {
    localStorage.removeItem("jwtToken");
    window.location.href = "login.html";
}

// Hàm fetch có kèm Authorization header
async function authFetch(url, options = {}) {
    const token = getToken();
    if (!options.headers) options.headers = {};
    options.headers["Authorization"] = `Bearer ${token}`;
    return fetch(url, options);
}

