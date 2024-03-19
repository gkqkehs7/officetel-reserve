import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axios.instance';

interface CommonResponse<T> {
	success: boolean;
	data: any;
}

const PostAxiosInstance = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await axiosInstance.post(url, data, config);
	return response;
};

const GetAxiosInstance = async <T>(
	url: string,
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await axiosInstance.get(url, config);
	return response;
};

const PatchAxiosInstance = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await axiosInstance.patch(url, data, config);
	return response;
};

const DeleteAxiosInstance = async <T>(
	url: string,
	config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await axiosInstance.delete(url, config);
	return response;
};

export {
	PostAxiosInstance,
	GetAxiosInstance,
	PatchAxiosInstance,
	DeleteAxiosInstance,
};
