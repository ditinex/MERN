import axios from "axios";
import Config from "../config";

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const API = {
  getName: async () => {
    let response = null;
    try {
      response = await api.get("");
    } catch (e) {
      response = e;
    }
    return response;
  },
};

export default API;
