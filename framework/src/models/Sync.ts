import axios, { AxiosPromise, AxiosResponse } from 'axios'//AxiosResponse, AxiosResponse are types

interface HasId {
    id?: number;
}
export class Sync<T extends HasId> {
    constructor(public rootURL: string) { }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootURL}/${id}`);
    }

    save(data: T): AxiosPromise {
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