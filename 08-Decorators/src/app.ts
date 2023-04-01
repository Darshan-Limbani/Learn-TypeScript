function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function withTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')

    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {


        return class extends originalConstructor {
            constructor(..._: any) {
                super();
                console.log('Rendering Template.....')

                const hookEl = document.getElementById(hookId);
                const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
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

function Log4(target: any, name: string, position: number) {

    console.log('------------------------------------')
    console.log('Parameter decorator!')
    console.log(target)
    console.log(name)
    console.log(position)
    console.log('------------------------------------')

}

class Product {
    @Log
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
    getPriceWithText(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @AutoBind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage)

// p.showMessage()


interface ValidatorConfig {
    [property: string]: {
        [validatable: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {

    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {

    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true
    }

    let isValid = true;
    console.log(objValidatorConfig)
    for (const prop in objValidatorConfig) {
        console.log(prop)
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;


    const createdCourse = new Course(title, price)
    if (!validate(createdCourse)) {
        alert('Invalid input, Please try again!')
        return
    }
    console.log(createdCourse)

})


