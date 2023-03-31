const names: Array<string> = []
// names[0].split(' ')

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello World!');
    }, 2000)
})
promise.then(data => {
    data.split(' ');
})