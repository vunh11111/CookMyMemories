// AuthService.js
const AuthService = {
    getToken: function () {
        return localStorage.getItem("jwtToken");
    },

    saveToken: function (token) {
        localStorage.setItem("jwtToken", token);
    },

    clearToken: function () {
        localStorage.removeItem("jwtToken");
    },

    isLoggedIn: function () {
        return !!this.getToken();
    },

    logout: function () {
        this.clearToken();
        window.location.href = "login.html";
    },

    getAuthHeader: function () {
        const token = this.getToken();
        return token ? { Authorization: `Bearer ${token}` } : {};
    }
};

export default AuthService;
