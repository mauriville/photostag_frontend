var axios = require('axios');

export default class MainService {

    constructor() {
        var token = JSON.parse(localStorage.getItem('token'));
        axios.defaults.baseURL = process.env.VUE_APP_MAIN_SERVICE;
        if (token) {
            axios.defaults.headers.common = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }else{
            axios.defaults.headers.common = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    getToken() {
        return axios.defaults.headers.common;
    }

    uploadFile(item) {
        return axios.post('api/uploadFile', item);
    }


}
