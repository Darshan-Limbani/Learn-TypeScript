
function add(input1: number | string, input2: number | string, resultConversion : 'as-number'|'as-string') {
    let result;

    if (typeof input1 === 'number' && typeof input2 === "number" || resultConversion ==='as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result
}


const ages = add(20, 21,'as-number')
console.log(ages)
const agesInString = add('50', '31','as-number')
console.log(agesInString)

const names = add('Udit', 'deep','as-string')
console.log(names)