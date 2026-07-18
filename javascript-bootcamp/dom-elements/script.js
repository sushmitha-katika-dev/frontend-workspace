// =====================================
// DOM Elements
// =====================================

/*
    DOM
    getElementById(), textContent, style, classList.add()
*/

// Headings & Text
const title = document.getElementById("title");
const heading = document.getElementById("heading");
const message = document.getElementById("message");

// Buttons
const button = document.getElementById("btn");
const redBtn = document.getElementById("redBtn");
const toggleBtn = document.getElementById("toggleBtn");
const submitBtn = document.getElementById("submitBtn");
const checkAge = document.getElementById("checkAge");

// Status
const status = document.getElementById("status");

// Inputs
const nameInput = document.getElementById("nameInput");
const cityInput = document.getElementById("cityInput");
const ageInput = document.getElementById("ageInput");

// Outputs
const output = document.getElementById("output");
const cityOutput = document.getElementById("cityOutput");
const result = document.getElementById("result");

// =====================================
// State
// =====================================

let isOnline = false;

// =====================================
// Initial Page Setup
// =====================================

title.classList.add("highlight");
title.textContent = "Welcome to JavaScript Bootcamp";

heading.style.color = "green";
heading.textContent = "JavaScript is Awesome";

message.style.color = "red";
message.textContent = "Welcome to Day 4";

console.log(title);
console.log(heading);
console.log(message);

// =====================================
// Event Listeners
// =====================================

/*
    Events
    click, keydown, Enter key

    Forms
    Reading input with .value, trim(), Empty validation, Number validation
*/

// Button Click
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Change Heading Color
redBtn.addEventListener("click", () => {
    redBtn.style.backgroundColor = "red";
    heading.style.color = "red";
});

// Toggle Online / Offline
toggleBtn.addEventListener("click", () => {
    isOnline = !isOnline;

// =====================================
// Conditional Rendering
// =====================================
    status.textContent = isOnline ? "Online" : "Offline";
    status.style.color = isOnline ? "green" : "red";
});

// Greeting
submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    output.textContent = `Hello, ${name}!`;
});

// City Validation
cityInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const city = cityInput.value.trim();

    if (city === "") {
        cityOutput.textContent = "Please enter a city name.";
    } else if (city.length < 3) {
        cityOutput.textContent = "City name is too short.";
    } else {
        cityOutput.textContent = `City: ${city}`;
    }
});

// Age Validation
checkAge.addEventListener("click", () => {
    const value = ageInput.value.trim();

    if (value === "") {
        result.textContent = "Please enter your age.";
        return;
    }

    const age = Number(value);

    if (isNaN(age)) {
        result.textContent = "Please enter a valid age.";
        return;
    }

    if (age <= 0) {
        result.textContent = "Invalid age.";
        return;
    }

    if (age < 18) {
        result.textContent = "Minor";
    } else {
        result.textContent = "Adult";
    }
});