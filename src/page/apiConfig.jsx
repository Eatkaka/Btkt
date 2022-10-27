import axios from "axios"
const BASE_URL ='https://api.realworld.io/api'
export const apiConfig = axios.create({url:BASE_URL}) //tao instance cua axios