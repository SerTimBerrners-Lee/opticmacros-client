import axios, { AxiosRequestConfig } from "axios";

export interface HttpClient {
	sendRequest(config: AxiosRequestConfig): Promise<any>;
}

export class AxiosHttpClient implements HttpClient {
	async sendRequest(config: AxiosRequestConfig): Promise<any> {
		try {
			const response = await axios(config);
			return response.data;
		} catch (error) {
			console.error(`Error during HTTP request: ${error}`);
			throw error;
		}
	}
}