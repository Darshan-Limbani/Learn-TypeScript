function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result : ' + num)
}


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {

    const result = n1 + n2;
    cb(result)

}

addAndHandle(10, 15, (result) => {
    console.log("Callback Fn Result : ", result)
})


printResult(add(10, 15))

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add
printResult(combinedValues(5, 5))

// combinedValues = printResult // Not Valid

printResult(combinedValues(5, 5))
