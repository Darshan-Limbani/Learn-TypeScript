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