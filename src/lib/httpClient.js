import axios from "axios";

const token = localStorage.getItem("token");

export const clientHttp = axios.create({
    baseURL: "https://api.lyncs.africa",
    headers: {
        Authorization: token ? `Bearer ${token}` : null,
    }
});

clientHttp.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error) {
            if (error.response && error.response.status === 401) {
                // Handle token expiration or invalid token here, e.g., log out the user or refresh the token
            }
        }
        return Promise.reject(error);
    }
)

clientHttp.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        window.location.href = "/login";
        return Promise.reject(error);
    }
);


export default clientHttp;