class Vehicle {
    drive(): void {
        console.log('Chugga chugga');
    };
    honk(): void {
        console.log('beep');
    }
};

class Car extends Vehicle {
    drive(): void {
        console.log('vroom');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();