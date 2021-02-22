import axios, { AxiosResponse } from 'axios'; //AxiosResponse is a type
import { Eventing } from './Eventing'

//The Question mark means that the property it's optional
//Now says in order for and object to satisfy this interface it can have a name it can have a name or an age
//but if it doesn't that's totally okay.
interface userProps {
    id?: number;
    name?: string;
    age?: number
}
export class User {
    public events: Eventing = new Eventing();
    constructor(private data: userProps) { }

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: userProps): void {
        //Overwrite all the properties from this.data with the values of update
        Object.assign(this.data, update);
    }


    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            //put
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            //post
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}