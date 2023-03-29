// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'darshan',
//     age: 21,
//     hobbies: ['Sports', 'Swimming', 'Drawing'],
//     role: [1, 'author']
// }

enum Role {
    ADMIN,
    AUTHOR,
    READ_ONLY,

}


const person =
    {
        name: 'darshan',
        age: 21,
        hobbies: ['Sports', 'Swimming', 'Drawing'],
        role: Role.ADMIN
    }

console.log(person.name)

let favouriteActivity: string[];


// person.role = [2,'admin','author']  //Not Allowed

// person.role.push(20)  // Allowed
// person.role.push("Admin") // Allowed
console.log(person.role)
favouriteActivity = ['Sports']


for (const hobby of person.hobbies) {
    console.log(hobby)
}

if (person.role === Role.ADMIN) {
    console.log('is Admin')
}
