var Student = /** @class */ (function () {
    // public indicator in the parameter allows to reference the properties in Person interface
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var student = new Student('Coding', 'A.', 'Bro');
console.log(greeter(student));
