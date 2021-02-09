//If we do not initialize the array we have to provide a type annotation like this string[]
//otherwise it's no necessary 
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

// Help with map, reduce...etc
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-05'];
importantDates.push('2015-11-06');
importantDates.push(new Date());