import axios from '../helpers/axios';
class UsersService {
	private config = axios.axiosConfig();

	public async getUsers(): Promise<any> {
		const data = await this.config
			.get("/users")
			.then(response => {
				const { data } = response;
				return JSON.parse(data);
			})
			.catch(err => {
				throw new Error(err);
			});

		return data;
	}

}
export default new UsersService();