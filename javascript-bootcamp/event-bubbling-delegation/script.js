// 1: Selecting Elements
const parent = document.getElementById("parent");
const child = document.getElementById("child");

const list = document.getElementById("list");
/*
parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Button clicked");
});
*/


//2: Event Delegation

list.addEventListener("click", (event) => {
    console.log(event.target.textContent);
});


//3: Button Click
child.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button Clicked");
})

//Part 4: Parent Click
parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});

