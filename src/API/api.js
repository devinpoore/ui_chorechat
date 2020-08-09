import axios from "axios";

const api = {
    // verify + add
    send_verification: new_roomie_obj => {
        console.log(new_roomie_obj);
        return axios.post("http://localhost:5500/send_verification", new_roomie_obj);
    },
    register: new_account_obj => {
        return axios.post("http://localhost:5500/register", new_account_obj);
    }
 }

export default api;