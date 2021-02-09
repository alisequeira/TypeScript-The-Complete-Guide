/**SUMMARY
 * Private: can be call it only in the parent class;
 * protected: can be call it in child class too but not in other places
 * public: can be call it everywhere
 */
/*
This => constructor(public color: string) {} is equivalent to
    color: string;
    constructor(color: string){
        this.color = color;
    }
*/
class Vehicle {
    constructor(public color: string) {

    }

    protected honk(): void {
        console.log('beep');
    }
};


class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom');
    }

    startDriving(): void {
        this.drive()
    }
}
