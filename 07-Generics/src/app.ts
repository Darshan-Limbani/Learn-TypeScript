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

//Generic Classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        // if (this.data.indexOf(item) === -1) {
        //     return;
        // }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }

}

const textStorage = new DataStorage<string>()
textStorage.addItem("Max")
textStorage.addItem("Manu")
textStorage.removeItem("Manu")
console.log(textStorage.getItems())


const numberStorage = new DataStorage<number>()
numberStorage.addItem(10)
numberStorage.addItem(20)
console.log(numberStorage.getItems())
numberStorage.removeItem(20)
console.log(numberStorage.getItems())


// const objStorage = new DataStorage<object>()
// const obj1 = {name:'Max'};
// objStorage.addItem(obj1)
// const obj2 = {name:'Manu'};
// objStorage.addItem(obj2)
// console.log(objStorage.getItems())
// objStorage.removeItem(obj2)
// console.log(objStorage.getItems())



// ---------------------------------------------------------
// Generic Utility Types
interface CourseGoal {
    title: string,
    description: string,
    date: Date
}


function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;

    return courseGoal as CourseGoal
}

const names:Readonly<string[]> =['Max','Anna'];
// names.push(' Manu')
// names.pop();