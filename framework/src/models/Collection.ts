import axios, { AxiosResponse } from 'axios'
import { User } from './User';
import { Eventing } from './Eventing';

export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(public root_URL: string, public deserialize: (json: K) => T) { }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.root_URL)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: K) => {
                    this.models.push(this.deserialize(value));
                });
                this.trigger('change')
            });
    }
}