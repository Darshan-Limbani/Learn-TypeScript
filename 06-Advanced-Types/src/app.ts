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

// let demo :Universal
// demo = 10
// console.log(typeof demo)
