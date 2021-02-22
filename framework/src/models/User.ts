import { Eventing } from './Eventing'
import { Sync } from './Sync';
//The Question mark means that the property it's optional
//Now says in order for and object to satisfy this interface it can have a name it can have a name or an age
//but if it doesn't that's totally okay.
export interface userProps {
    id?: number;
    name?: string;
    age?: number
}

const ROOT_URL = 'http://localhost:3000/users'
export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<userProps> = new Sync<userProps>(ROOT_URL);





}