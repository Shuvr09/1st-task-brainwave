
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){

    const emailInput = document.getElementById('exampleFormControlInput1').value.trim();
    const firstName = document.querySelector('input[aria-label="First name"]').value.trim();
    const lastName = document.querySelector('input[aria-label="Last name"]').value.trim();

    // Email validation (basic)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Name validation
    if (firstName === '' || lastName === '') {
        alert("Please enter both first name and last name.");
        return;
    }

    const profileArea = document.getElementById('profile');
    profileArea.style.display = 'none';
    const toDoList = document.getElementById('task-body');
    toDoList.style.display = "block" ;
})

const textarea = document.getElementById("tasks");
textarea.addEventListener('keyup', e=>{
    textarea.style.height = "auto"
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`
});

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if(taskText === ''){
        alert("Please Enter a Task!");
        return;
    }

    //task div creation
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    //content div creation
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    //input box creation
    const taskTextInput = document.createElement('input');
    taskTextInput.type = 'text';
    taskTextInput.classList.add('text');
    taskTextInput.value = taskText;
    taskTextInput.setAttribute('disabled', 'disabled');

    //append input box in content div
    contentDiv.appendChild(taskTextInput);

    //action div creation
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerText= 'Edit';

    const doneButton = document.createElement('button');
    doneButton.classList.add('done');
    doneButton.innerText= 'Done';

    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(doneButton);

    taskDiv.appendChild(contentDiv);
    taskDiv.appendChild(actionsDiv);

    const tasksContainer = document.getElementById('tasks');
    tasksContainer.appendChild(taskDiv);

    taskInput.value='';

    editButton.addEventListener('click',()=>
    {
        if(editButton.innerText.toLowerCase() === 'edit'){
            taskTextInput.removeAttribute('disabled');
            taskTextInput.focus();
            editButton.innerText='Save';
        }
        else{
            taskTextInput.setAttribute('disabled','disabled');
            editButton.innerText = 'Edit';
        }
    });

    doneButton.addEventListener('click',()=>{
        tasksContainer.removeChild(taskDiv);
    });
}