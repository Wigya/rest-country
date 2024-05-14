import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: 'https://restcountries.com/v3.1',
    }
)

export const countriesService = {
    getCountries: async () => {
        return await axiosInstance.get("/all");
    }
}

