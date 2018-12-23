/**
 * Created by Administrator on 2018/12/22.
 */
import axios from 'axios';
import RequestConfig from './request-config.js';
import qs from 'qs'
// create an axios instance
const service = axios.create({
    baseURL: '/api',//RequestConfig.test.HOST_NAME,//RequestConfig.test.HOST_NAME, // api��base_url     process.env.BASE_API   RequestConfig.test.HOST_NAME  ������
    timeout: 30000, // request timeout
    //withCredentials: false, // Ĭ�ϵ�
});
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// request interceptor
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error)
});
// respone interceptor
service.interceptors.response.use(
        response => {
        return response.data
    },

        error => {
        return Promise.reject(error)
    });

export default service
