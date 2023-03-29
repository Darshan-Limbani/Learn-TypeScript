function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result : ' + num)
}

printResult(add(10, 15))

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add
printResult(combinedValues(5, 5))

// combinedValues = printResult // Not Valid

printResult(combinedValues(5, 5))
