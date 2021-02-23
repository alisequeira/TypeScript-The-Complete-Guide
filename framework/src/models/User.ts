import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';


//The Question mark means that the property it's optional
//Now says in order for and object to satisfy this interface it can have a name it can have a name or an age
//but if it doesn't that's totally okay.
export interface userProps {
    id?: number;
    name?: string;
    age?: number
}

const ROOT_URL = 'http://localhost:3000/users'
export class User extends Model<userProps> {
    /*
        Anytime we want to create a user we'll call
        static buildUser user and   passing attrs properties
    */
    static buildUser(attrs: userProps): User {
        return new User(
            new Attributes<userProps>(attrs),
            new Eventing(),
            new ApiSync<userProps>(ROOT_URL)

        );
    }
}