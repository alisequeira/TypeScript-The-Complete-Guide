/**SUMMARY
 * Private: can be call it only in the parent class;
 * protected: can be call it in child class too but not in other places
 * public: can be call it everywhere
 */
class Vehicle {
    public drive(): void {
        console.log('Chugga chugga');
    };
    protected honk(): void {
        console.log('beep');
    }
};

//Here mark an error cuz we cannot overwrite the property public from Vehicle
class Car extends Vehicle {
    private drive(): void {
        console.log('vroom');
    }

    startDriving(): void {
        this.drive()
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();