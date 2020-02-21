import axios from "axios";

const api = {
    verify: verifyData => {
        return axios.post("http://localhost:5000/verifySms", verifyData);
    }
}

export default api;