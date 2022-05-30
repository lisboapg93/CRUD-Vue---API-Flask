import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";

Vue.use(VueAxios, axios);

// axios.defaults.baseURL = process.env.VUE_APP_API_GERAL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const axiosConfig = router => {
	axios.defaults.baseURL = process.env.VUE_APP_API_GERAL;
	axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

	// axios.header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS, post, get');

	// axios.interceptors.request.use((config) => {
	// 	return config;
	// }, (error) => {
	// 	return Promise.reject(error);
	// });

	// axios.interceptors.response.use((response) => {
	// 	return response;
	// }, (error) => {
	// 	return Promise.reject(error);
	// });

	return Promise.resolve(router);
};