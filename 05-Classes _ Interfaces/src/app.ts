class Department {
    // name: string;
    // private  id: string;
    protected employee: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.name = n
    }

    describe(this: Department) {
        console.log(`Department (${this.id}) : ${this.name}`)
    }

    addEmployee(employee: string) {
        // this.id = "d2" // Not Allowed as Read Only
        this.employee.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employee.length)
        console.log(this.employee)
    }
}

class ITDepartment extends Department {

    admins: string[]

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super('id', 'Accounting')
    }

    addReport(report: string) {
        this.reports.push(report)
    }

    printReport() {
        console.log(this.reports)
    }

    addEmployee(employee: string) {
        this.employee.push(employee)
    }

}


const it = new ITDepartment('d1', ['Max'])
it.describe()

it.addEmployee('Max')
it.addEmployee('John')
// it.employee[2]='Anna'

it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong!!')
accounting.printReport()

accounting.addEmployee("Doe")
accounting.addEmployee("John")
// accounting.printEmployeeInformation()

// const itCopy = {describe: it.describe, name: "Marketing"}
// itCopy.describe()

