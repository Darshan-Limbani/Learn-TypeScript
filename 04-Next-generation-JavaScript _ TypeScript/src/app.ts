const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number = 5) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));

const hobbies = ['Sports', 'Swimming'];

const newHobby = ['Singing']

newHobby.push(...hobbies)

const person = {
    name: 'john',
    age: 25
}

const extraPerson = {
    ...person
}

// const addNum = (...nums: number[]) => { //Rest Parameter
//     return nums.reduce((curResult, curValue) => {
//         return curResult + curValue
//     }, 0)
// }
//
// const nums = [2, 2.3, 5, 6, 10]
//
// console.log(addNum(...nums))


const addNum = (...nums: [number, number, number]) => { // Tuple
    return nums.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const nums = addNum(2, 2.3, 5)

console.log(nums)