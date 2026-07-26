/*console.log("Program Started");

setTimeout(() => {
    console.log("2-second timer finished");
}, 2000);

setTimeout(() => {
    console.log("3-second timer finished");
}, 3000);

console.log("Program Finished");


const promise =new Promise((resolve, reject) => {
   setTimeout(()=>{
    console.log("promise resolver");
        resolve();
   }, 2000); 
});
promise.then(() =>{
    console.log("promise completed");
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        // Resolve with the string "Hello JavaScript"
        resolve("Hello Javascript");
    }, 2000);
});

promise2.then((message) => {
    console.log(message);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Network Error");
    }, 2000);
});

promise3.catch((error) => {
    console.log(error);
});

async function greet(){
    return "Hello!";
}

const result = greet();
console.log(result);

async function greett() {

    const promise = Promise.resolve("Hello JavaScript");

    // Get the value from the Promise using await
    const message = await promise;

    // Print the value
    console.log(message);

}

greett();

async function loadUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(response);
}
loadUser();

//const message = "hii try-block"
async function test(){
    try{
        console.log(message);
        console.log(`this should not print`);
    } catch{
        console.log(error);
    }
}
test();
*/

const user = {
    name: "sush",
    role: "developer",
    experience: "fresher"
};

localStorage.setItem("user", JSON.stringify(user));

const  data = localStorage.getItem("user");

const obj = JSON.parse(data);

console.log(obj.name);
console.log(obj.role);
console.log(obj.experience);

localStorage.removeItem("user");

console.log(localStorage.getItem("user"));



const skills = ["java", "springboot", "react"];

localStorage.setItem("skills", JSON.stringify(skills));

const data2 = localStorage.getItem("skills");

const obj2 = JSON.parse(data2);
obj2.forEach(skill => {
    console.log(skill);
});

localStorage.removeItem("skills");
console.log(localStorage.getItem("skills"));



const employee = [
    {
        id: 1,
        name: "sush"
    },
    {
        id: 2,
        name: "anu",
    },
    {
        id:3,
        name: "kiran"
    }
];

localStorage.setItem("employee",JSON.stringify(employee));
const data3 = localStorage.getItem("employee");

const obj3 = JSON.parse(data3);
obj3.forEach(emp => {
    console.log(emp);
});

localStorage.removeItem("employee");

console.log(localStorage.getItem("employee"));


const age = 16;

try{
    if( age < 18){
        throw new Error("Age must be atleast 18");
    }
    console.log("eligible to vote");
}catch(error){
    console.error(error.message);
}
finally{
    console.log("program ended");
}


function divide(a, b){
    if(b === 0){
        throw new Error("cannot be zero");
    }
    return a / b;
}
try{
    console.log(divide(10,2));
    console.log(divide(10,0));
}catch(error){
    console.error(error.message);
}finally{
    console.log("Division completed");
}

const users = [
    { id: 1, name: "Sushmitha" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Anjali" }
];

function findUser(users, id){
    const user = users.find(user => user.id === id);
    if(!user){
        throw new Error("user not found");
    }
    return user;
}
try{
    console.log(findUser(users,2));
    console.log(findUser(users,0));
}catch(error){
    console.error(error.message);
}finally{
    console.log("FInding user cmplted");
}