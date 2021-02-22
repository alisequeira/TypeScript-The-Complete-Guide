
export class Attributes<T> {
    constructor(private data: T) { }

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: T): void {
        //Overwrite all the properties from this.data with the values of update
        Object.assign(this.data, update);
    }


}