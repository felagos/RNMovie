import axios from 'axios';
import { API_KEY, BASE_URL_API } from '@env'

axios.interceptors.request.use(config => {
	const urlApiKey = `api_key=${API_KEY}`;
	const url = config.url?.includes("=") ? `${config.url}&${urlApiKey}` : `${config.url}?${urlApiKey}`;
	config.url = `${BASE_URL_API}/${url}`;
	return config;
}, (error) => {
	return Promise.reject(error);
});

axios.interceptors.response.use(response => {
	return response.data;
}, function (error) {
	return Promise.reject(error);
});

export default axios;