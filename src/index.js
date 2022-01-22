//The following is the MVP 

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  
  //click some form of a submit button:
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskInput();
  })
});

//to type a task into the input field: 
const taskInput = () => {
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement('li');
  newTask.textContent = newTaskDescription.value; //innerText also works
  //document.querySelector('#tasks').appendChild(newTask);
  toAppend(newTask)
}

const toAppend = task => {
  document.getElementById("tasks").appendChild(task);
}

