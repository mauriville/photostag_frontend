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

    showImage(id) {
        return axios.get('api/Image/show?id=' + id);
    }

    indexImage() {
        return axios.defaults.baseURL + 'api/Image/index';
    }

    listImage() {
        return axios.get('api/Image/list');
    }

    storeImage(item) {
        return axios.post('api/Image/store', item);
    }

    destroyImage(item) {
        return axios.post('api/Image/destroy', item);
    }

    showTag(id) {
        return axios.get('api/Tag/show?id=' + id);
    }

    indexTag() {
        return axios.defaults.baseURL + 'api/Tag/index';
    }

    listTag() {
        return axios.get('api/Tag/list');
    }

    storeTag(item) {
        return axios.post('api/Tag/store', item);
    }

    destroyTag(item) {
        return axios.post('api/Tag/destroy', item);
    }

    showTagImage(id) {
        return axios.get('api/TagImage/show?id=' + id);
    }

    listTagImage() {
        return axios.get('api/TagImage/list');
    }

    storeTagImage(item) {
        return axios.post('api/TagImage/store', item);
    }

    destroyTagImage(item) {
        return axios.post('api/TagImage/destroy', item);
    }
}
