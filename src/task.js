import { displayTask } from "./displayTask";

class Task {
    constructor(name, description, date, priority, project) {
      this.name = name;
      this.description = description;
      this.date = date;
      this.priority = priority;
      this.project = project;
    }
  
    // completeBook() {
    //   allTask.splice(allTask.indexOf(this), 1);
    // }
  }

  const allTask = [];
  const form = document.querySelector(".side-dialog");

 form.addEventListener('submit', (e)=> {
       e.preventDefault();
    const taskName = document.getElementById('task-name').value
    const taskDescription = document.getElementById('task-description').value
    const taskDate = document.getElementById('task-date').value
    const taskPriority = document.getElementById('task-priority').value
    const taskProject = document.getElementById('task-projects').value
    // function to add book to library array
    addTaskToAllTasks(taskName, taskDescription, taskDate, taskPriority, taskProject);
    // function to display books on screen
    displayTask();
 

} )

function addTaskToAllTasks(name, description, date, priority, project) {
        const newTask = new Task(name, description, date, priority, project);
        allTask.push(newTask);
}


 export { allTask }

