import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteFunction }) {

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => (
          <Task key={index} 
                index={index}
                text={task.text} 
                category={task.category} 
                deleteFunction={deleteFunction}
          />
        ))}
      
    </div>
  );
}

export default TaskList;
