  import { loadTaskBoard } from  "./DOM";
  import deleteicon from './assets/delete_28dp_F6EBFC_FILL0_wght400_GRAD0_opsz24.svg';
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
  })

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

  addTaskToAllTasks('CleanUp', 'Deep clean bedroom, living room, bathroom, and kitchen.', '5 Oct 2024', 'low', 'Chores');
  addTaskToAllTasks('Finish Home Page', 'Fix bugs', '4 Oct 2024', 'Urgent', 'Website');
  addTaskToAllTasks('Plan itinerary', 'Search for beautifull places.', '8 Oct 2024', 'Important', 'Japan Trip');

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
      taskPriority.className = 'priority';
      taskPriority.textContent = task.priority;

      if(task.priority == 'low') {
          taskPriority.classList.add('low');
       } else if(task.priority == 'Important') {
          taskPriority.classList.add('important')
       } else if(task.priority == 'Urgent') {
          taskPriority.classList.add( 'urgent');
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
      taskList.appendChild(taskDiv)
    })
  }
  displayTask()

  // project stuffs
  class Project {
    constructor(name) {
    this.name = name;
    }
    deleteProject() {
    allProject.splice(allProject.indexOf(this), 1);
    }
  }

  let allProject = []; 
  const projectDialog = document.querySelector('.Project-dialog');
  const projectList = document.querySelector('.project-list');

  projectDialog.addEventListener('submit', (e)=> {
    e.preventDefault();

    const projectName = document.getElementById('project-Name').value
    addProjectToAllProject(projectName);
    displayProject();
    displayOptions();
  })

  function addProjectToAllProject(name) {
    const newproject = new Project(name);
    allProject.push(newproject);
  }

  // default values
  addProjectToAllProject('Chores')
  addProjectToAllProject('Mental health');
  addProjectToAllProject('Japan Trip')

 function displayProject() {
  projectList.innerHTML = '';

  allProject.forEach(project => {

    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.textContent = project.name;

    const projectIcon = document.createElement('div');
    projectIcon.className = 'project-icon';

    const deleteIcon = document.createElement('img');
    deleteIcon.src = deleteicon;
    deleteIcon.title = 'Delete';
    deleteIcon.className = 'delete'
    projectIcon.appendChild(deleteIcon);

    projectDiv.appendChild(projectIcon);
    projectList.appendChild(projectDiv);
  })
 }
 displayProject()

  projectList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
      const project = allProject[Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode)];
      project.deleteProject();
      displayProject();
    }
  })

  // Adding options when project is added
  const taskProjects = document.querySelector('#task-projects');

  function displayOptions() {
    taskProjects.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Tasks';
    defaultOption.setAttribute('selected', true);
    taskProjects.appendChild(defaultOption);

    allProject.forEach(project => {
      const option = document.createElement('option');
      option.textContent = project.name;
      taskProjects.appendChild(option)
    })
  }
  displayOptions();