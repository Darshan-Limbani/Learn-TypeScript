class Department {
    // name: string;
    private employee: string[] = []

    constructor(private id: string, public name: string) {
        // this.name = n
    }

    describe(this: Department) {
        console.log(`Department (${this.id}) : ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employee.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employee.length)
        console.log(this.employee)
    }
}

const accounting = new Department('d1', 'Accounting')
accounting.describe()

accounting.addEmployee('Max')
accounting.addEmployee('John')
// accounting.employee[2]='Anna'

accounting.printEmployeeInformation()
// const accountingCopy = {describe: accounting.describe, name: "Marketing"}
// accountingCopy.describe()