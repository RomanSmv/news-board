import axios from "axios";

const instance = axios.create({
    // https://newsdata.io/api/1/news?apikey=pub_90094b9f473ee80395516d2a60ad4aa74657
    baseURL: 'https://newsdata.io/api/1/news?apikey=pub_90094b9f473ee80395516d2a60ad4aa74657',
})
export const newsApi = {
    async filterByCountry(country: string) {
        const res = await instance.get<{ results: any }>('',{params: {country}})
        return res.data
    }
}