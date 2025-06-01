import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const[tasks, setTasks] = useState(TASKS)

  const[categories] = useState(CATEGORIES)

  const[selectedCategory, setSelectedCategory] = useState("All")


  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }


  const filteredTaskByCategory = tasks.filter(task => (
    selectedCategory === "All" || task.category === selectedCategory
  )
  )

  function handleDeleteButton(taskIndex) {
    setTasks(tasks.filter((_, index) => index !== taskIndex))
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      filterFunction={setSelectedCategory}
      categories={categories}
      selectedCategory={selectedCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleAddTask}
      />

      <TaskList 
      categories={categories}
      tasks={filteredTaskByCategory}
      deleteFunction={handleDeleteButton}
      />
    </div>
  );
}

export default App;
