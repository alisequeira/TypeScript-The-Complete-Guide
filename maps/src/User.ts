import { mappable } from './CustomMap';
/*
    using implement we're telling TS that we want to make
    sure that a instance of User satisfies the property required 
    by mappable interface
 */
import faker from 'faker';
export class User implements mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}