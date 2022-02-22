import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).user.token;
let TOKEN
const findToken = JSON.parse(localStorage.getItem("persist:root"));

// console.log(TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${TOKEN}` },
// });