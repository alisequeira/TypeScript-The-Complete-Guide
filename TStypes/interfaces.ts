interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Reported {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};

const printReport = (item: Reported): void => {
    console.log(item.summary());
}

printVehicle(oldCivic);
printReport(oldCivic);
printReport(drink);