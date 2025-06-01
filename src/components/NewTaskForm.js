import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("")

  const [selectedCategory, setSelectedCategory] = useState(categories[1])

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({ text, category: selectedCategory})
    setText("")
    setSelectedCategory(categories[1])
  }
  return (
    <form className="new-task-form"
          onSubmit={handleSubmit}
          >
      <label>
        Details
        <input type="text" 
               name="text" 
               value={text}
               onChange={e => setText(e.target.value)}
               />
      </label>
      <label>
        Category
        <select name="category"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                >
          {categories.filter(c => c !== "All").map(category => 
            <option key={category} value={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
