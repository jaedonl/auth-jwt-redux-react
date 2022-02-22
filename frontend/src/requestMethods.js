import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

let TOKEN
let getUser = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth)

if (getUser.user !== null) {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).user.token;
} else {
    console.log('no user')
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { "authorization": `Bearer ${TOKEN}` },
});