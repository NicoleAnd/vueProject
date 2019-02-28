import axios from 'axios'
import qs from 'qs'
import {BASE_URL} from "./config"

/* 设置 axios 默认URL */
axios.defaults.baseURL = BASE_URL;

/* 设置axios 默认请求类型 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* 设置 axios 默认超时时间 */
axios.defaults.timeout = 3600000;

/* 添加请求拦截 */
axios.interceptors.request.use(config => {
	if (config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, error => {
	/* 错误的传参 */
	return Promise.reject(error);
});

export default axios;
