console.log("Program Started");

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