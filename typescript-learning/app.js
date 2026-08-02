//import type{ StudentModule } from "./Student";
//import { Calculator } from "./Calculator";
// Variables & Primitive Types & Type Inference
let message = "Hello Typescript";
console.log(message);
let age = 22;
let fullName = "Sushmitha";
let isGraduate = true;
//let cgpa: number = 8.68;
let city = "hyderabad";
let learning = "typescript";
console.log(`Name: ${fullName}, Age: ${age}, City: ${city}, Learning: ${learning}`);
let favoriteLanguage = "java";
let githubUsername = "sushmitha-katika-dev";
let yearsOfCoding = 4;
console.log(favoriteLanguage);
let companyName = "OpenAI";
let salary = 850000;
let isPlaced = false;
let phoneNumber = 9849815467;
let country = "India";
console.log(companyName);
console.log(salary);
console.log(isPlaced);
console.log(phoneNumber);
console.log(country);
let name = "sushmitha";
let age2 = 22;
// age2 ="Twenty Two";
//typescript any & Unknown
let data = "Hello";
console.log(data.toUpperCase());
data = 100;
console.log(data);
let input = "Typescripty";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
input = 500;
console.log(input);
let userData = "sushmitha";
console.log(userData.toUpperCase());
userData = 123;
console.log(userData);
userData = false;
console.log(userData);
let apiResponse = "sushmitha-katika-dev";
if (typeof apiResponse === "string") {
    console.log(apiResponse.toUpperCase());
}
apiResponse = 123;
console.log(apiResponse);
apiResponse = true;
console.log(apiResponse);
//typescript Arrays
let skills = [
    "Java", "Spring Boot", "React", "Typescript"
];
skills.push("docker");
console.log(skills);
let marks = [20, 34, 54];
marks.push(100);
console.log(marks);
let completed = [true, false, false];
console.log(completed);
let languages = ["Telugu", "Hindi", "malayalam"];
languages.push("english");
console.log(languages);
let companies = ["microsoft", "google", "Dell", "HP"];
companies.push("wipro");
console.log(companies);
let cgpa = [7.8, 8.5, 6.4, 7.2];
cgpa.push(9.9);
console.log(cgpa);
let isCompleted = [true, false, true];
isCompleted.push(false);
console.log(isCompleted);
//typescript objects
let employee = {
    id: 21,
    name: "Sai",
    company: "Google",
    salary: 100000,
    skills: ["Java", "Spring Boot", "React", "TypeScript"],
    isPermanent: true
};
console.log(employee);
console.log(employee.name);
employee.skills.push("Mysql");
employee.salary = employee.salary + 50000;
console.log(employee);
//typescript function
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function greetMsg(name) {
    return `Hello ${name}`;
}
const square = (num) => {
    return num ** 2;
};
console.log(add(1, 3));
console.log(subtract(3, 4));
console.log(greetMsg("Sush"));
console.log(square(4));
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}
console.log(calculateSalary(300, 9));
function introduce(name, city) {
    if (city) {
        return `Hi, I'm ${name} from ${city}`;
    }
    return `Hi, I'm ${name}`;
}
console.log(introduce("Sushmitha"));
console.log(introduce("Sushmitha", "Bng"));
function welcome(name = "Guest") {
    return `Hello ${name}`;
}
console.log(welcome());
function createEmployee(name, company, salary, department) {
    if (department) {
        console.log(`Name: ${name}, Company: ${company}, Salary: ${salary}, Department: ${department}`);
    }
    console.log(`Name: ${name}, Company: ${company}, Salary: ${salary}`);
}
createEmployee("sushmitha", "google", 9000000);
createEmployee("vinay", "microsoft", 9238403, "it");
let student = {
    id: 1,
    name: "Sushmitha",
    cgpa: 8.68,
    branch: "Information Technology",
    skills: ["Java", "Spring Boot", "React"],
    isGraduate: true
};
console.log(student);
console.log(student.name);
student.skills.push("TypeScript");
let project1 = {
    id: 21,
    name: "kiran",
    technology: "java",
    teamSize: 10,
    completed: true
};
let project2 = {
    id: 22,
    name: "sai",
    technology: "react",
    teamSize: 100,
    completed: false
};
let projects = [
    project1,
    project2
];
for (const project of projects) {
    console.log(project);
}
let orderStatus = "Completed";
let projectt1 = {
    id: 1,
    name: "BuildFlow AI",
    status: "In Progress"
};
let projectt2 = {
    id: 2,
    name: "Portfolio",
    status: "Completed"
};
//Enums
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Success"] = "SUCCESS";
    PaymentStatus["Failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
let payment = PaymentStatus.Success;
console.log(payment);
var EmployeeRole;
(function (EmployeeRole) {
    EmployeeRole["Developer"] = "DEVELOPER";
    EmployeeRole["Tester"] = "TESTER";
    EmployeeRole["Manager"] = "MANAGER";
    EmployeeRole["HR"] = "HR";
})(EmployeeRole || (EmployeeRole = {}));
let emp1 = {
    id: 1,
    name: "Sushmitha",
    role: EmployeeRole.Developer
};
let emp2 = {
    id: 2,
    name: "Sai",
    role: EmployeeRole.Manager
};
console.log(emp1);
console.log(emp2);
let studentt = {
    success: true,
    message: "Student fetched successfully",
    data: {
        id: 1,
        name: "Sushmitha",
        cgpa: 8.68
    }
};
console.log(studentt);
let emp = {
    success: true,
    message: "Employee fetched successfully",
    data: {
        id: 101,
        name: "Sai",
        company: "Google"
    }
};
console.log(emp);
//classes
class EmployeeTs {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
let empTs = new EmployeeTs(21, "ram");
empTs.display();
class Product {
    id;
    name;
    price;
    category;
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }
    discount(percent) {
        this.price = this.price - (this.price * percent) / 100;
    }
}
const laptop = new Product(1, "Laptop", 50000, "Electronics");
laptop.display();
laptop.discount(13);
laptop.display();
export {};
//# sourceMappingURL=app.js.map