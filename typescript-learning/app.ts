import type{ StudentModule } from "./Student";
import { Calculator } from "./Calculator";

// Variables & Primitive Types & Type Inference
let message: string = "Hello Typescript";
console.log(message);

let age: number = 22;
let fullName: string = "Sushmitha";
let isGraduate: boolean = true;
//let cgpa: number = 8.68;

let city: string = "hyderabad";
let learning: string = "typescript";

console.log(
  `Name: ${fullName}, Age: ${age}, City: ${city}, Learning: ${learning}`
);

let favoriteLanguage: string = "java";
let githubUsername: string = "sushmitha-katika-dev";
let yearsOfCoding: number = 4;
console.log(favoriteLanguage);

let companyName: string = "OpenAI";
let salary: number = 850000;
let isPlaced: boolean = false;
let phoneNumber: number = 9849815467;
let country: string = "India";

console.log(companyName);
console.log(salary);
console.log(isPlaced);
console.log(phoneNumber);
console.log(country);

let name = "sushmitha";
let age2 = 22;
// age2 ="Twenty Two";


//typescript any & Unknown

let data: any = "Hello";

console.log(data.toUpperCase());

data  = 100;
console.log(data);

let input: unknown = "Typescripty";

if(typeof input === "string"){
    console.log(input.toUpperCase());
}

input = 500;
console.log(input);

let userData: any = "sushmitha";

console.log(userData.toUpperCase());
userData = 123;
console.log(userData);
userData = false;
console.log(userData);

let apiResponse: unknown = "sushmitha-katika-dev";

if(typeof apiResponse === "string"){
    console.log(apiResponse.toUpperCase());
}
apiResponse = 123;
console.log(apiResponse);
apiResponse = true;
console.log(apiResponse);


//typescript Arrays

let skills: string[] = [
    "Java","Spring Boot", "React", "Typescript"
];
skills.push("docker");
console.log(skills);

let marks: number[] = [20,34,54];
marks.push(100);
console.log(marks);

let completed: boolean[] =[true, false, false];
console.log(completed);

let languages: string[] = ["Telugu", "Hindi", "malayalam"];
languages.push("english");
console.log(languages);

let companies: string[] = ["microsoft","google","Dell", "HP"];
companies.push("wipro");
console.log(companies);

let cgpa: number[] = [7.8, 8.5, 6.4,7.2];
cgpa.push(9.9);
console.log(cgpa);

let isCompleted: boolean[] = [true,false, true];
isCompleted.push(false);
console.log(isCompleted);


//typescript objects

let employee : {
    id : number;
    name : string;
    company : string;
    salary : number;
    skills : string[];
    isPermanent : boolean;
} = {
    id : 21,
    name : "Sai",
    company : "Google",
    salary : 100000,
    skills : ["Java","Spring Boot", "React", "TypeScript"],
    isPermanent : true
};

console.log(employee);
console.log(employee.name);
employee.skills.push("Mysql");
employee.salary = employee.salary + 50000;
console.log(employee);

//typescript function

function add(a: number, b: number): number{
    return a+b;
}

function subtract(a: number, b: number): number{
    return a-b;
}

function greetMsg(name: string): string{
    return `Hello ${name}`;
}


const square = (num: number): number => {
    return num**2;
}

console.log(add(1, 3));
console.log(subtract(3, 4));
console.log(greetMsg("Sush"));
console.log(square(4));

function calculateSalary(basicSalary: number, bonus: number): number {
    return basicSalary + bonus;
}
console.log(calculateSalary(300, 9));


function introduce(name: string, city?: string): string {
    if(city){
        return `Hi, I'm ${name} from ${city}`;
    }

    return `Hi, I'm ${name}`;
}
console.log(introduce("Sushmitha"));
console.log(introduce("Sushmitha", "Bng"));

function welcome(name: string = "Guest"): string {
    return `Hello ${name}`;
}
console.log(welcome());

function createEmployee(
    name: string,
    company: string,
    salary: number,
    department?: string
): void{
    if(department){
        console.log(`Name: ${name}, Company: ${company}, Salary: ${salary}, Department: ${department}`);
    }
    console.log(`Name: ${name}, Company: ${company}, Salary: ${salary}`);
}
createEmployee("sushmitha", "google", 9000000);
createEmployee("vinay", "microsoft", 9238403,"it");


//typescript interface
interface Student {
    id: number;
    name: string;
    cgpa: number;
    branch: string;
    skills: string[];
    isGraduate: boolean;
}

let student:Student = {
    id: 1,
    name: "Sushmitha",
    cgpa: 8.68,
    branch: "Information Technology",
    skills: ["Java", "Spring Boot", "React"],
    isGraduate: true
}

console.log(student);
console.log(student.name);
student.skills.push("TypeScript");

interface Project {
    id: number;
    name: string;
    technology: string;
    teamSize: number;
    completed: boolean
}

let project1: Project ={
    id: 21,
    name: "kiran",
    technology: "java",
    teamSize: 10,
    completed: true
}

let project2: Project ={
    id: 22,
    name: "sai",
    technology: "react",
    teamSize: 100,
    completed: false
}

let projects: Project[] =[
    project1, 
    project2
];

for(const project of projects){
    console.log(project);
}

// Type Aliases
type Status = "Pending" | "Completed" | "Rejected";
let orderStatus: Status = "Completed";
//let orderStatus: Status = "Finished" -> throws an error

type Employee = {
    id: number;
    name: string;
    company: string;
    salary: number;
};

type ProjectStatus = "Pending" | "In Progress" | "Completed";

type Projectt = {
    id: number;
    name: string;
    status: ProjectStatus;
};

let projectt1: Projectt = {
    id: 1,
    name: "BuildFlow AI",
    status: "In Progress"
};

let projectt2: Projectt = {
    id: 2,
    name: "Portfolio",
    status: "Completed"
};


//Enums

enum PaymentStatus {
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED"
}

let payment = PaymentStatus.Success;
console.log(payment);

enum EmployeeRole {
    Developer = "DEVELOPER",
    Tester = "TESTER",
    Manager = "MANAGER",
    HR = "HR"
}

interface Employe {
    id: number;
    name: string;
    role: EmployeeRole;
}
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

//Generics
interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

let studentt = {
    success: true,
    message: "Student fetched successfully",
    data: {
        id: 1,
        name: "Sushmitha",
        cgpa: 8.68
    }
}

console.log(studentt);

let emp = {
    success: true,
    message: "Employee fetched successfully",
    data: {
        id: 101,
        name: "Sai",
        company: "Google"
    }
}

console.log(emp);

//classes

class EmployeeTs {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }
}

let empTs = new EmployeeTs(21, "ram");
empTs.display();

class Product {
    id: number;
    name: string;
    price: number;
    category: string;

    constructor(id: number, name: string, price: number, category: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    display():void{
        console.log(`ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }
    discount(percent:number){
        this.price = this.price - (this.price * percent) / 100;
    }
}

const laptop = new Product(
    1,
    "Laptop",
    50000,
    "Electronics"
);

laptop.display();

laptop.discount(13);

laptop.display();

// Modules (import/export)

const studentModule: StudentModule = {
    id:1,
    name:"Sushmitha",
    cgpa:8.68
};

const calc = new Calculator();

console.log(studentModule);
console.log(calc.add(10,20));
