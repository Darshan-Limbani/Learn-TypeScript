// const names: Array<string> = []
// // names[0].split(' ')
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World!');
//     }, 2000)
// })
// promise.then(data => {
//     data.split(' ');
// })

// ----------------------------------------
// Generic Function
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30})
console.log(mergedObj)


interface Lengthy {
    length: number;
}


function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let des = 'Got no Value.'
    if (element.length === 1) {
        des = 'Got 1 element.'
    } else if (element.length > 1) {
        des = 'Got ' + element.length + ' elements.'
    }
    return [element, des]
}

console.log(countAndDescribe("Hello"))
console.log(countAndDescribe(["Hello", "World"]))

// The keyof Constraints

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value : ' + obj[key];
}


console.log(extractAndConvert({name: 'Max'}, 'name'))

