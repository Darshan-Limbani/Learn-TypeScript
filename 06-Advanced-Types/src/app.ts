type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}
// & : Intersection Operator
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}


type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {   //Condition is Called type Guard
        return a.toString() + b.toString;
    }
    return a + b;
}

const result = add('a', 'b')
result.split(' ')

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name : ' + emp.name);
    if ('privileges' in emp)
        console.log('privileges : ' + emp.privileges);

    if ('startDate' in emp) {
        console.log('Start Date : ' + emp.startDate)
    }
}

printEmployeeInformation(e1)


class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving Truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading Cargo... : ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100)
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
            break
    }


    console.log('Moving at speed : ' + speed)
}


moveAnimal({type: 'bird', flyingSpeed: 12})

// const useInputElement = <HTMLInputElement>document.getElementById('user-input');
const useInputElement = document.getElementById('user-input')! as HTMLInputElement

useInputElement.value = 'Hi there';

interface ErrorContainer {
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'No a valid email!',
    userName: 'Must start with a capital character!'
};