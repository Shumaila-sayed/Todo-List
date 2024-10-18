import "./styles.css";
console.log(1)

document.querySelector('.add-task').addEventListener('click', () => {
    const dialog = document.querySelector('dialog');
    dialog.show();
});

document.getElementById('close-dialog').addEventListener('click', () => {
    const dialog = document.querySelector('dialog');
    dialog.close(); 
});
