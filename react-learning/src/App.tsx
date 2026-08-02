import EmployeeCard from "./components/EmployeeCard";
import Greeting from "./components/Greeting";
import { useState } from "react";
import "./App.css";


function greet() {
  return "Hello, Welcome to React!";
}

function App() {
  const name = "Sushmitha Katika";
  const age = 23;
  const gender = "Female";
  const city = "Hyderabad";
  const cgpa = 9.2;
  const a = 20;
  const b = 30;
  const price = 5000;
  const language = "react with typescript";
  const skills = [
    "Java",
    "Spring Boot",
    "React"
  ];

  const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
function decrement() {
  setCount(Math.max(0, count - 1));
}
function reset() {
  setCount(0);
}
  return (
    <>
      <h1>Name: {name}</h1>
      <hr />
      <div className="details">
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>City: {city}</p>
        <p>CGPA: {cgpa}</p>
      </div>
      {/*
      <p>Favourite Language: Java</p>
      <hr />
      <p>Favourite Framework: Spring Boot</p>
      <hr />
      <p>Currently Learning: React with TypeScript</p>
      <hr />
      <p>Dream Company: Microsoft</p>
      <hr />
      */}
      <h3>Sum of {a} and {b} is: {a + b}</h3>
      <h2> Gst Price = {price * 0.18 + price}</h2>
      <h1>{greet()}</h1>
      <h1>Language : {language.toUpperCase()}</h1>
      <h2>Skills: {skills[1]}</h2>
      <h2>Skills: {skills.join(", ")}</h2>
      <Greeting
          name="Sushmitha"
          company="Microsoft"
          salary={1200000}
      />
      <h1>Employee Details</h1>
      <EmployeeCard
        name="Sushmitha Katika"
        role="Software Engineer"
        company="Microsoft"
        experience={2}
      />
      <EmployeeCard
        name="Sai Teja"
        role="Software DEV Engineer"
        company="Lowe's"
        experience={3}
      />
      <EmployeeCard
        name="kishan"
        role="Software developer"
        company="Infosys"
        experience={4}
      />

      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={decrement}>
          - 
      </button>
      <button className="btn" onClick={reset}>
          Reset
      </button> 
    </>
  );
}

export default App;