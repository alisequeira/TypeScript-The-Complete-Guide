//Alias 
//()=>void Indicates that the type passed has to be a function and return nothing
type Callback = () => void

export class Eventing {
    //With this syntax we're telling TS that we don't know what properties 
    //this object is going to have. We know it will be and object
    //and then it will have some properties but we just don't know
    events: { [key: string]: Callback[] } = {};

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