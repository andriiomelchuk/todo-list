import axios from "axios";
import {API} from "./constants";

export default axios.create({
    baseURL:`${API}/api/v1/`,
    headers: {
        'Accept' : 'aplication/JSON'
    }
})