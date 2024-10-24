import  "./task";
import "./styles.css";

document.querySelector('.add-task').addEventListener('click', () => {
    const dialog = document.querySelector('.side-dialog');
    dialog.show();    
});

document.getElementById('close-dialog').addEventListener('click', () => {
    const dialog = document.querySelector('.side-dialog');
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

/* Next Steps:

 1. include defaults tasks in allTask array
 2. no HTML only DOm
 3. complete a todo
 4. Make projects clickable to only view certain Todos
 5. categorise todos in projects dynamically
 6. delte a project && edit its name
 7. some internal storage

*/