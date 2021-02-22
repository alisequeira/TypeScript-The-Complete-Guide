
export class Attributes<T> {
    constructor(private data: T) { }

    //Generic Constrain in a function
    //type of K is going to be only a key of userProps type
    get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    set(update: T): void {
        //Overwrite all the properties from this.data with the values of update
        Object.assign(this.data, update);
    }


}