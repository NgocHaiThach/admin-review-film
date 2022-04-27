import axios from "axios";

export default function RequestApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `http://localhost:8080/api/v1/${endpoint}`,
        data: body
    })
        .catch(err => {
            console.error(err);
        })
};