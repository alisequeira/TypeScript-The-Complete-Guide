let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in Objects

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//Classes
class Car {

}
//We're saying the variable car is only ever going
//to refer to an instance of a car we can then place
let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//Function
/*
    (i: number): provide a annotation for the differences values
    => void: list out the difference values expect to this function to return
 */
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}