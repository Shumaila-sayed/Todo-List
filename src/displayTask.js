 import { allTask } from "./task";

let taskList = document.querySelector('.task-list')

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

export { displayTask }