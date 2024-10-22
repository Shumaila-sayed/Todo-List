import "./styles.css";
console.log(1)

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
 