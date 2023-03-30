interface Named {
    readonly name: string;
}

interface Greetable extends Named {

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string

    constructor(n: string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greetable;

user1 = new Person('Min')

// user1.name = "Manu"

user1.greet('Hi there - I am')
console.log(user1)