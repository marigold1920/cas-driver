import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:5000/api/users"
    baseURL: "http://caselastic-env-1.eba-rh86ed2y.ap-southeast-1.elasticbeanstalk.com/api"
});

export const uploadImage = base64str => {
    let body = new FormData();
    body.append("image", base64str);
    return axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?&key=4db83994c2bb263720daf5ec3d963a54",
        data: body,
        headers: { "Content-Type": "multipart/form-data" }
    });
};

export const fetchHistory = (token, userId) => {
    return api.get(`/driver/${userId}/requests/history`, {
        headers: {
            Authorization: token
        }
    });
};

export const fetchHistoryDetails = (token, requestId) => {
    return api.get(`driver/history/details/${requestId}`, {
        headers: {
            Authorization: token
        }
    });
};

export const checkExistedPhoneNumber = phone => {
    return api.get(`/users/exist?username=${phone}`);
};

export const checkIsRegister = phone => {
    return api.get(`/users/drivers/check_exist?username=${phone}`);
};

export const registerAccount = user => {
    return api.post("/users/signup_driver", user);
};

export const resetPassword = user => {
    return api.put("/users/drivers/forget_password", user);
};
