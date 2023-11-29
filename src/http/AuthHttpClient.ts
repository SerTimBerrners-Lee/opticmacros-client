import { Method } from "axios";
import { HttpClient } from "./HttpClient";
import { AuthManager } from "../auth/AuthManager";

/**
 * Class for sending requests with authentication
 */
export class AuthenticatedHttpClient {
	private authManager: AuthManager;
	private httpClient: HttpClient;

	constructor(authManager: AuthManager, httpClient: HttpClient) {
		this.authManager = authManager;
		this.httpClient = httpClient;
	}

	async send(url: string, method: Method, data?: any): Promise<any> {
		const token = this.authManager.getToken();
		const baseUrl = this.authManager.getBaseUrl();

		return this.httpClient.sendRequest({
			url: `${baseUrl}/${url}`,
			method,
			headers: { Authorization: `Bearer ${token}` },
			data
		});
	}
}