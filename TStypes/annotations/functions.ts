//define the type of arguments that the function will receive
// and the type that the function will return
const add = (a: number, b: number): number => {
    return a + b
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function devide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message);
};

//never: means that we never gonna reach the end of the function.
const throwError = (message: string): never => {
    throw new Error(message);
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
};


//Destructuring with annotations
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};
logWeather(todayWeather)