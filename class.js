class Employee {
    constructor(id, name, age) {
        this.employeeId = id;
        this.employeeName = name;
        this.employeeAge = age;
    }

    set setEmployeeName(name) {
        this.employeeName = name;
    }

    get getEmployeeInfo() {
        return "\nID = " + this.employeeId + "\nName = " + this.employeeName + "\nAge = " + this.employeeAge;
    }

    static greeting(companyName = "Company") {
        return "Welcome to " + companyName;
    }
}

class Accountant extends Employee {
    constructor(id, name, age, payment) {
        super(id, name, age);
        this.employeePayment = payment;
    }

    showPaymentInfo() {
        return "Payment = " + this.employeePayment;
    }
}

console.log(Employee.greeting("Google")); // call static method with its class

let obj = new Accountant(1, "Reyad", 23, 60000);
console.log(obj.getEmployeeInfo);

obj.setEmployeeName = "Reyad Hossain";
console.log(obj.getEmployeeInfo);
console.log(obj.showPaymentInfo());
