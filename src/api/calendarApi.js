import axios from "axios";
import { getEnvVariable } from "../helpers";

const { VITE_API_URL } = getEnvVariable();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

export default calendarApi;