import addicon from './assets/add_28dp_F6EBFC_FILL0_wght400_GRAD0_opsz24.svg';
import cancelIcon from './assets/cancel_26dp_F02424_FILL0_wght400_GRAD0_opsz24.svg';

function loadTaskBoard() {
    console.log('TaskBoard check')

    let sideBar = document.querySelector('.side-bar');

    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';

    const name = document.createElement('h1');
    name.textContent = 'TASKBOARD';
    logoDiv.appendChild(name);

    sideBar.appendChild(logoDiv);

    const secondDiv = document.createElement('div');

    const addTask = document.createElement('p');
    addTask.className = 'add-task';
    addTask.textContent = 'Add Tasks';
    secondDiv.appendChild(addTask);

    const sideDialog = document.createElement('dialog');
    sideDialog.className = 'side-dialog';
    const formDiv = document.createElement('div');
    formDiv.className = 'div-form';
    const sideForm = document.createElement('form');
    sideForm.className = 'side-form';

    const taskName = document.createElement('input');
    taskName.id = 'task-name';
    taskName.setAttribute("type", "text");
    taskName.name = 'task';
    taskName.placeholder = "Task name (required)";
    taskName.required = true;
    sideForm.appendChild(taskName);

    const taskDescription = document.createElement('textarea');
    taskDescription.id = 'task-description';
    taskDescription.name = 'description';
    taskDescription.placeholder = 'Notes...';
    sideForm.appendChild(taskDescription);

    const taskDate = document.createElement('input');
    taskDate.setAttribute("type", "date");
    taskDate.id = 'task-date';
    taskDate.name = 'date';
    taskDate.required = true;
    sideForm.appendChild(taskDate);

    const taskPriority = document.createElement('select');
    taskPriority.id = 'task-priority';
    taskPriority.name = 'priority';

    for(let n = 0; n < 4; n++){
       let priorityOptions = document.createElement('option');
        if(n == 0){
            priorityOptions.textContent = 'No Priority';
        } else if (n == 1) {
            priorityOptions.textContent = 'low';
        } else if (n == 2) {
            priorityOptions.textContent = 'Important';
        } else if (n == 3) {
            priorityOptions.textContent = 'Urgent';
        }
       taskPriority.appendChild(priorityOptions);
     }

    sideForm.appendChild(taskPriority);

    const taskProject = document.createElement('select');
    taskProject.id = 'task-projects';
    taskProject.name = 'project';
    sideForm.appendChild(taskProject);

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'btns'

    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-dialog';
    closeBtn.textContent = 'Close';
    buttonDiv.appendChild(closeBtn);

    const addBtn = document.createElement('button');
    addBtn.id = 'addToTask';
    addBtn.textContent = 'Add';
    addBtn.formmethod = 'dialog'
    buttonDiv.appendChild(addBtn);

    sideForm.appendChild(buttonDiv);
    formDiv.appendChild(sideForm);
    sideDialog.appendChild(formDiv);
    secondDiv.appendChild(sideDialog);

    const alltasks = document.createElement('p');
    alltasks.className = 'all-task';
    alltasks.textContent = 'All tasks'
    secondDiv.appendChild(alltasks);

    const projects = document.createElement('div');
    projects.className = 'projects';
    projects.textContent = 'My Projects';

    const addIconDiv = document.createElement('div');
    addIconDiv.className = 'add-icon';

    const addIcon = document.createElement('img');
    addIcon.src = addicon;
    addIcon.title = 'Add'
    addIconDiv.appendChild(addIcon);

    projects.appendChild(addIconDiv)
    secondDiv.appendChild(projects);

    const projectDialog = document.createElement('dialog');
    projectDialog.className = 'Project-dialog';
    const projectForm = document.createElement('form');
    projectForm.method = 'dialog';
    const projectInputDiv = document.createElement('div');
    projectInputDiv.className = "project-name-input";

    const cancelImg = document.createElement('img');
    cancelImg.className = 'project-cancel';
    cancelImg.src = cancelIcon;
    cancelImg.title = 'Cancel'
    projectInputDiv.appendChild(cancelImg);

    const projectInput = document.createElement('input');
    projectInput.setAttribute("type", "text");
    projectInput.id = 'project-Name'
    projectInput.placeholder = "Project Name + [Enter]";
    projectInput.required = true;
    projectInputDiv.appendChild(projectInput);

    projectForm.appendChild(projectInputDiv);
    projectDialog.appendChild(projectForm);
    secondDiv.appendChild(projectDialog);

    const projectList = document.createElement('div');
    projectList.className = 'project-list';
    secondDiv.appendChild(projectList);

    sideBar.appendChild(secondDiv);

    const mainContent = document.querySelector('.main-content');
    const mainTab = document.createElement('div');
    mainTab.className = 'main-tab';

    const heading = document.createElement('h2');
    heading.textContent = 'All Tasks';
    mainTab.appendChild(heading);

    mainContent.appendChild(mainTab);

    const taskList = document.createElement('div');
    taskList.className = 'task-list';
    mainContent.appendChild(taskList);

 // Event Listeners
    document.querySelector('.add-task').addEventListener('click', () => {
        const dialog = document.querySelector('.side-dialog');
        dialog.show();    
    });
    
    document.getElementById('close-dialog').addEventListener('click', (e) => {
        const dialog = document.querySelector('.side-dialog');
        e.preventDefault();
        dialog.close(); 
    });
    
    document.querySelector('.add-icon').addEventListener('click', () => {
        const projectDialog = document.querySelector('.Project-dialog');
        projectDialog.show();
    })
    
    document.querySelector('.project-cancel').addEventListener('click', () => {
        const projectDialog = document.querySelector('.Project-dialog');
        projectDialog.close();
    })
}

export { loadTaskBoard }