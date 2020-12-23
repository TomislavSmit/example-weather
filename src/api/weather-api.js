import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/";
const APPID = "8041567580af3b158a42e66ef367b44a";

export default axios.create({
  baseURL,
  params: {
    APPID
  }
});
