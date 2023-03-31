
function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}


function withTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')

    return function (constructor: any) {
        console.log('Rendering Template.....')

        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger('LOGGING - PERSON')
@withTemplate('<h1> My Person Object</h1>', 'app')
class Person {
    name = 'Max'

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person()

console.log(person)

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDecorator) {

    console.log('Accessor decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

function Log3(target: any, name: string, descriptor: PropertyDecorator) {

    console.log('Method decorator!')
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

class Product {
    // @Log
    title: string;
    _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
        throw new Error('Invalid price - should be positive!')
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithText(tax: number) {
        return this._price * (1 + tax)
    }
}
