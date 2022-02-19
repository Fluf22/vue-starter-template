import { ResponseError } from "./interfaces";

export const checkStatus = (response: Response) => {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error: ResponseError = new Error(`HTTP Error ${response.statusText}`);
	error.status = response.statusText;
	error.response = response;
	throw error;
};

export const parseJSON = (response: Response) => {
	return response.json();
}
