import 'reflect-metadata'
/** 
const plane = {
    color: 'red'
};

Reflect.defineMetadata('note', 'hi there!', plane);
Reflect.defineMetadata('height', 10, plane);


const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
console.log(note, height);

*/
@printMetadata
class Plane {
    colors: string = 'red';

    @markFunction('HI THERE')
    fly(): void {
        console.log('vrrrrr');
    }
}

function markFunction(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }

}
//typeof plane reference to the constructor method of a class
//It's used when you want to apply a decorator to a class
function printMetadata(target: typeof Plane) {
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}