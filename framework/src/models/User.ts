//The Question mark means that the property it's optional
//Now says in order for and object to satisfy this interface it can have a name it can have a name or an age
//but if it doesn't that's totally okay.
interface userProps {
    name?: string;
    age?: number
}
//Alias 
//()=>void Indicates that the type passed has to be a function and return nothing
type Callback = () => void
export class User {
    //With this syntax we're telling TS that we don't know what properties 
    //this object is going to have. We know it will be and object
    //and then it will have some properties but we just don't know
    events: { [key: string]: Callback[] } = {};

    constructor(private data: userProps) { }

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: userProps): void {
        //Overwrite all the properties from this.data with the values of update
        Object.assign(this.data, update);
    }


    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return
        }

        handlers.forEach(callback => {
            callback();
        });
    }
}