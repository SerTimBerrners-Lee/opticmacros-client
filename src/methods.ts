import { AuthManager } from "./auth/AuthManager";
import { URI_SERVER } from "./config";
import { AuthenticatedHttpClient } from "./http/AuthHttpClient";
import { AxiosHttpClient } from "./http/HttpClient";
import { ICar } from './interfaces/car.interface';

const httpClient = new AxiosHttpClient();
const authManager = new AuthManager(httpClient, URI_SERVER);
const authenticatedHttpClient = new AuthenticatedHttpClient(authManager, httpClient);

export default {
	async fetchAuth(login: string, password: string) {
		try {
			await authManager.authenticate(login, password);
		} catch (err) {
			console.error(err.toString());
		}
	},

	async fetchGetCars() {
		try {
			const cars = await authenticatedHttpClient.send('cars', 'GET');
			console.table(cars);
		} catch (err) {
			console.error(err.toString());
		}
	},

	async fetchAddCar(data: ICar) {
		try {
			const car = await authenticatedHttpClient.send('cars', 'POST', {
				...data,
				year: Number(data.year),
				price: Number(data.price),
			});
			console.log(`New Car Created!: `, car);
		} catch (err) {
			console.error(err.toString());
		}
	},

	async fetchDeleteCar(carId: number) {
		try {
			const car = await authenticatedHttpClient.send(`cars/${carId}`, 'DELETE');
			console.log(`Car is Deleted: `, car);
		} catch (err) {
			console.error(err.toString());
		}
	},

	async fetchUpdateCar(carId: string, data: ICar) {
		try {
			const car = await authenticatedHttpClient.send(`cars/${carId}`, 'PUT', {
				...data,
				year: Number(data.year),
				price: Number(data.price)
			});

			console.log(`Car is Updated: `, car);
		} catch (err) {
			console.error(err.toString());
		}
	}
}