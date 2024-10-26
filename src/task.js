import { loadTaskBoard } from  "./DOM";
  loadTaskBoard();

class Task {
  constructor(name, description, date, priority, project) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }

  completeTask() {
    allTask.splice(allTask.indexOf(this), 1);
  }
}

  let allTask = [];
  const form = document.querySelector(".side-dialog");
  let taskList = document.querySelector('.task-list');
  // let submitTask = document.querySelector('#addToTask';)

  form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value
    const taskDescription = document.getElementById('task-description').value
    const taskDate = document.getElementById('task-date').value
    const taskPriority = document.getElementById('task-priority').value
    const taskProject = document.getElementById('task-projects').value
    // function to add task to allTask array
    addTaskToAllTasks(taskName, taskDescription, taskDate, taskPriority, taskProject);
    // function to display tasks on screen
    displayTask();
} )

taskList.addEventListener('click', (e) => {
  if(e.target.classList.contains('round-mark')){
      const task = allTask[Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode)];
      task.completeTask();
      displayTask();
  }
})

  function addTaskToAllTasks(name, description, date, priority, project) {
    const newTask = new Task(name, description, date, priority, project);
    allTask.push(newTask);
  }

  function displayTask() {
    taskList.innerHTML = '';
    allTask.forEach(task => {

        const taskDiv = document.createElement('div');
        taskDiv.className = "task";

        const taskContent = document.createElement('div');
        taskContent.className = "task-content";

        const completeTask = document.createElement('span');
        completeTask.className = 'round-mark';
        taskContent.appendChild(completeTask);

        const taskTitle = document.createElement('p');
        taskTitle.textContent = task.name;
        taskTitle.className = 'title';
        taskContent.appendChild(taskTitle);

        const taskDecription = document.createElement('p');
        taskDecription.textContent = task.description;
        taskDecription.className = 'description';
        taskContent.appendChild(taskDecription);

        taskDiv.appendChild(taskContent);

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';

        const taskPriority = document.createElement('p');
        taskPriority.classList.add('priority')
        taskPriority.textContent = task.priority;

        if(task.priority == 'low') {
            taskPriority.classList.add('priority', 'low');
        } else if(task.priority == 'Important') {
            taskPriority.classList.add('priority', 'important')
        } else if(task.priority == 'Urgent') {
            taskPriority.classList.add('priority', 'urgent');
        } 
        taskDetails.appendChild(taskPriority);

        const taskDate = document.createElement('p')
        taskDate.className = 'date';
        taskDate.textContent = task.date;
        taskDetails.appendChild(taskDate);

        const taskProject = document.createElement('p');
        taskProject.className = 'project-title';
        taskProject.textContent = `#${task.project}`;
        taskDetails.appendChild(taskProject);

        taskDiv.appendChild(taskDetails);

        taskList.append(taskDiv)
    })
}

