import { HttpClient } from "../http/HttpClient";

/**
 * Class for authentication management
 */
export class AuthManager {
	private httpClient: HttpClient;
	private token: string | null = null;
	private baseUrl: string;

	constructor(httpClient: HttpClient, baseUrl: string) {
		this.httpClient = httpClient;
		this.baseUrl = baseUrl;
	}

	async authenticate(login: string, password: string): Promise<void> {
		try {
			const data = await this.httpClient.sendRequest({
				url: `${this.baseUrl}/login`,
				method: 'post',
				data: { login, password }
			});

			this.token = data.token;
			console.log("Authorization was successful!");
		} catch (error) {
			console.error("Authorization Error:", error.toString());
			throw error;
		}
	}

	getToken(): string {
		if (!this.token) {
			throw new Error("No token available. Please authenticate first.");
		}
		return this.token;
	}

	getBaseUrl(): string {
		return this.baseUrl;
	}
}