import axios, { AxiosInstance } from 'axios';

class ConfigAxios {
    public axiosConfig(): AxiosInstance {
        return axios.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            headers: {
                "Content-type": "Application/json",
            }
        })
    }
}

export default new ConfigAxios();