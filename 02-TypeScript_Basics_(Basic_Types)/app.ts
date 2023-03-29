function add(input1: number | string, input2: number | string) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result
}


const ages = add(20, 21)
console.log(ages)

const names = add('Udit', 'deep')
console.log(names)