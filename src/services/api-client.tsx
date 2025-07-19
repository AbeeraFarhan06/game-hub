import axios, { AxiosRequestConfig } from "axios"
export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null ;
}

const axiosInstance = axios.create( {
    baseURL: 'https://api.rawg.io/api' , 
    params: { 
        key: '13753d85f0dd4cc496f26370f0eb8cc0'
    }
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
          .get<FetchResponse<T>>(this.endpoint, config)
          .then(res => res.data)
    }
}

export default APIClient