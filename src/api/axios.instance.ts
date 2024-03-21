import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'https://api.officetel-backend.shop/',
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		console.log(error);

		const message = error.response?.data?.message;

		const error_code = error.response?.data?.code;

		if (!message) {
			return alert('잘못된 접근');
		}

		if (!error_code) {
			return alert('잘못된 접근');
		}

		// const kakao_error_code = error.response.data.error_code;

		// if (kakao_error_code.include('KOE')) {
		// 	return alert('잘못된 접근입니다. 다시 로그인하세요!');
		// }

		if (error_code === 1000) {
			return alert('잘못된 접근입니다. 다시 로그인하세요!');
		}

		return alert(`${message}`);
	}
);

export default axiosInstance;
