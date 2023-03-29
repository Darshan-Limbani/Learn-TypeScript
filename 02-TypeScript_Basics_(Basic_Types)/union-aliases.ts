type Combinable = number | string;
type Conversational = 'as-number' | 'as-string'

function add(input1: Combinable, input2: Combinable, resultConversion: Conversational) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result
}


const ages = add(20, 21, 'as-number')
console.log(ages)
const agesInString = add('50', '31', 'as-number')
console.log(agesInString)

const names = add('Udit', 'deep', 'as-string')
console.log(names)