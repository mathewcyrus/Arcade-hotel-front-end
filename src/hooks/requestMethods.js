import axios from "axios";

const MAIN_URL = "http://localhost:8800/api/";
export const dataRequest = axios.create({
  baseURL: MAIN_URL,
});
