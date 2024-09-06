const email = document.getElementById('exampleFormControlInput1');
const input = document.querySelector('input');
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {

    if (input.value.trim() === '') {
        alert('Please fill out the input field!');
    } else {
        const profileArea = document.getElementById('profile');
        profileArea.style.display = 'none';
        const toDoList = document.getElementById('task-body');
        toDoList.style.display = "block";
    }

})


const textarea = document.getElementById("tasks");
textarea.addEventListener('keyup', e => {
    textarea.style.height = "auto"
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`
});

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please Enter a Task!");
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const taskTextInput = document.createElement('input');
    taskTextInput.type = 'text';
    taskTextInput.classList.add('text');
    taskTextInput.value = taskText;
    taskTextInput.setAttribute('disabled', 'disabled');

    contentDiv.appendChild(taskTextInput);

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = 'Delete';

    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);

    taskDiv.appendChild(contentDiv);
    taskDiv.appendChild(actionsDiv);

    const tasksContainer = document.getElementById('tasks');
    tasksContainer.appendChild(taskDiv);

    taskInput.value = '';

    editButton.addEventListener('click', () => {
        if (editButton.innerText.toLowerCase() === 'edit') {
            taskTextInput.removeAttribute('disabled');
            taskTextInput.focus();
            editButton.innerText = 'Save';
        }
        else {
            taskTextInput.setAttribute('disabled', 'disabled');
            editButton.innerText = 'Edit';
        }
    });

    deleteButton.addEventListener('click', () => {
        tasksContainer.removeChild(taskDiv);
    });
}