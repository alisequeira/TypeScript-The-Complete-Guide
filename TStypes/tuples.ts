//Objects
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//Array
const pepsi = ['brown', true, 40];

//Tuple
//We are saying that the array is always gonna have a consistency ordering of elements

//Alias 
type Drink = [string, boolean, number];

const cocaCola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
