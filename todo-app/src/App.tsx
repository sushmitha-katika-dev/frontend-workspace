import { useState } from "react";

function App() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState<String[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    
    if(task.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    setTasks([...tasks, task]);

    setTask("");
  }

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default App;