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


