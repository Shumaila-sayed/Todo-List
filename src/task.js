import { loadTaskBoard } from "./DOM";
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
    removeTask(this);
  }
}

class Project {
  constructor(name) {
    this.name = name;
  }

  deleteProject() {
    removeProject(this);
  }
}

let allTasks = [];
let allProjects = [];
let filteredProjectName = null;

const form = document.querySelector(".side-dialog");
const projectDialog = document.querySelector('.Project-dialog');
const taskList = document.querySelector('.task-list');
const projectList = document.querySelector('.project-list');
const taskProjects = document.querySelector('#task-projects');
const allTasksButton = document.querySelector('.all-task');
let heading = document.querySelector('h2');

initializeApp();

function initializeApp() {
  // Initial default values for tasks and projects
  addTask('CleanUp', 'Deep clean bedroom, living room, bathroom, and kitchen.', '5 Oct 2024', 'low', 'Chores');
  addTask('Finish Home Page', 'Fix bugs', '4 Oct 2024', 'Urgent', 'Website');
  addTask('Plan itinerary', 'Search for beautiful places.', '8 Oct 2024', 'Important', 'Japan Trip');

  addProject('Chores');
  addProject('Mental health');
  addProject('Japan Trip');

  setupEventListeners();
  restrictDateInput()
  displayTasks(allTasks);
  displayProjects();
  updateProjectOptions();
}

function restrictDateInput() {
  const taskDateInput = document.getElementById('task-date');
  const today = new Date().toISOString().split('T')[0]; // Format today's date as "YYYY-MM-DD"
  taskDateInput.min = today;
}

function formatDate(dateString) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
}

function setupEventListeners() {
  form.addEventListener('submit', handleTaskSubmit);
  projectDialog.addEventListener('submit', handleProjectSubmit);
  taskList.addEventListener('click', handleTaskCompletion);
  projectList.addEventListener('click', handleProjectActions);

  allTasksButton.addEventListener('click', () => {
    filteredProjectName = null;
    heading.textContent = "All Tasks"
    displayTasks(allTasks);
  });
}

function handleTaskSubmit(e) {
  e.preventDefault();
  const taskName = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDate = document.getElementById('task-date').value;
  const taskPriority = document.getElementById('task-priority').value;
  const taskProject = document.getElementById('task-projects').value;

  addTask(taskName, taskDescription, taskDate, taskPriority, taskProject);
  displayTasks(currentDisplayedTasks());
}

function handleProjectSubmit(e) {
  e.preventDefault();
  const projectName = document.getElementById('project-Name').value;

  addProject(projectName);
  displayProjects();
  updateProjectOptions();
}

function handleTaskCompletion(e) {
  if (e.target.classList.contains('round-mark')) {
    const taskIndex = Array.from(e.target.closest('.task-list').children).indexOf(e.target.closest('.task'));
    const task = allTasks[taskIndex];
    task.completeTask();
    displayTasks(currentDisplayedTasks());
  }
}

function handleProjectActions(e) {
  if (e.target.classList.contains('delete')) {
    const projectIndex = Array.from(e.target.closest('.project-list').children).indexOf(e.target.closest('.project'));
    const project = allProjects[projectIndex];
    project.deleteProject();

    allTasks = allTasks.filter(task => task.project !== project.name);
    displayTasks(currentDisplayedTasks());
    displayProjects();
  } else if (e.target.closest('.project')) {
    filteredProjectName = e.target.closest('.project').textContent;
    heading.textContent = filteredProjectName;
    displayTasks(currentDisplayedTasks());
  }
}

// Task-related functions
function addTask(name, description, date, priority, project) {
  const formattedDate = formatDate(date); // Format the date before adding
  const newTask = new Task(name, description, formattedDate, priority, project);
  allTasks.push(newTask);
}

function removeTask(task) {
  allTasks = allTasks.filter(t => t !== task);
}

function displayTasks(arr) {
  taskList.innerHTML = '';

  if (arr.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = "Congrats! You've completed all the tasks.";
    taskList.appendChild(emptyMessage);
    return;
  }
  
  arr.forEach(task => taskList.appendChild(createTaskElement(task)));
}

function createTaskElement(task) {
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

  const taskDescription = document.createElement('p');
  taskDescription.textContent = task.description;
  taskDescription.className = 'description';
  taskContent.appendChild(taskDescription);

  taskDiv.appendChild(taskContent);

  const taskDetails = document.createElement('div');
  taskDetails.className = 'task-details';

  const taskPriority = document.createElement('p');
  taskPriority.className = 'priority';
  taskPriority.textContent = task.priority;
  taskPriority.classList.add(task.priority.toLowerCase());
  taskDetails.appendChild(taskPriority);

  const taskDate = document.createElement('p');
  taskDate.className = 'date';
  taskDate.textContent = task.date;
  taskDetails.appendChild(taskDate);

  const taskProject = document.createElement('p');
  taskProject.className = 'project-title';
  taskProject.textContent = `#${task.project}`;
  taskDetails.appendChild(taskProject);

  taskDiv.appendChild(taskDetails);
  return taskDiv;
}

function currentDisplayedTasks() {
  return filteredProjectName ? allTasks.filter(task => task.project === filteredProjectName) : allTasks;
}

// Project-related functions
function addProject(name) {
  const newProject = new Project(name);
  allProjects.push(newProject);
}

function removeProject(project) {
  allProjects = allProjects.filter(p => p !== project);
}

function displayProjects() {
  projectList.innerHTML = '';
  allProjects.forEach(project => projectList.appendChild(createProjectElement(project)));
}

function createProjectElement(project) {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project';
  projectDiv.textContent = project.name;

  const projectIcon = document.createElement('div');
  projectIcon.className = 'project-icon';

  const deleteIcon = document.createElement('img');
  deleteIcon.src = deleteicon;
  deleteIcon.title = 'Delete';
  deleteIcon.className = 'delete';
  projectIcon.appendChild(deleteIcon);

  projectDiv.appendChild(projectIcon);
  return projectDiv;
}

function updateProjectOptions() {
  taskProjects.innerHTML = '';

  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Tasks';
  defaultOption.setAttribute('selected', true);
  taskProjects.appendChild(defaultOption);

  allProjects.forEach(project => {
    const option = document.createElement('option');
    option.textContent = project.name;
    taskProjects.appendChild(option);
  });
}
