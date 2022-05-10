import axios from "axios";

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
<<<<<<< HEAD
        url: `http://localhost:5000/api/${endpoint}`,
        data: body,
=======
        url: `http://localhost:5000/api/blogs/${endpoint}`,
        data: body
>>>>>>> cf49c0c23b35b56728a3adddcb03ad2a88411d36
    })
        .catch(err => {
            console.error(err)
        })
}
