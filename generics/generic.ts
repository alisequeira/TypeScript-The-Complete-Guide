class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string) { }

    get(index: number): string {
        return this.collection[index];
    }
}

//GENERICS

class ArrayOfAnything<T>{
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<number>([1, 2, 3, 4]);
new ArrayOfAnything<string>(['a', 'b', 'c']);

//Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);

//Generics Constraints It's going to limit the type that we can pass in for T
interface printable {
    print(): void;
}


function printHouseOrCars<T extends printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}