import { Eventing } from './Eventing'
import { Sync } from './Sync';
import { Attributes } from './Attributes';


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
    //Two types of initialization 

    //1.When we don't need something coming from the constructor.
    public events: Eventing = new Eventing();
    public sync: Sync<userProps> = new Sync<userProps>(ROOT_URL);
    public attributes: Attributes<userProps>;

    //2. When we got some properties that have to be initialized through the constructor
    constructor(attrs: userProps) {
        this.attributes = new Attributes<userProps>(attrs);
    }

    get on() {
        //Return a reference to the on event
        return this.events.on;
    }
}