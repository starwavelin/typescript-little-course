class Student {
    fullName: string;

    // public indicator in the parameter allows to reference the properties in Person interface
    constructor(public firstName: string, middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let student =  new Student('Coding', 'A.', 'Bro');

console.log(greeter(student));