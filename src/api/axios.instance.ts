import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.DEV ? '/api' : `${process.env.VITE_SERVER_DOMAIN}`,
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosInstance;
