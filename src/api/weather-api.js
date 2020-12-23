import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/";
const APPID = process.env.VUE_APP_API_KEY;

export default axios.create({
  baseURL,
  params: {
    APPID
  }
});
