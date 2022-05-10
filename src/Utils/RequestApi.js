import axios from "axios";

export default function RequestApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `http://localhost:5000/api/blogs/${endpoint}`,
        data: body
    })
        .catch(err => {
            console.error(err);
        })
};