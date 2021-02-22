import axios, { AxiosPromise, AxiosResponse } from 'axios'//AxiosResponse, AxiosResponse are types
import { userProps } from './User'

export class Sync {
    constructor(public rootURL: string) { }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootURL}/${id}`);
    }

    save(data: userProps): AxiosPromise {
        const { id } = data;

        if (id) {
            //put
            return axios.put(`${this.rootURL}/${id}`, data);
        } else {
            //post
            return axios.post(this.rootURL, data);
        }
    }
}