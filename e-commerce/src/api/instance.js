import axios from "axios";

const instance = axios.create({
    baseURL: "https://681f268e72e59f922ef55f13.mockapi.io/api"
});

export default instance;