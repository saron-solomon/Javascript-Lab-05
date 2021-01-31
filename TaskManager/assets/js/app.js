
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector('.fa');
const asc = document.querySelector('.ascending');
const desc = document.querySelector('.descending');

form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

reloadIcon.addEventListener('click', reloadPage);

ascending.addEventListener('click', sortTasks);

descending.addEventListener('click', sortTasks);



function addNewTask(e) {

    e.preventDefault();


    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }


    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);




}





function clearAllTasks() {


    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}




function filterTasks(e) {


    if (filter.value === '') {
        filter.style.borderColor = "red";

        return;
    }

    e.preventDefault();

    const userInput = filter.value;
    const results = document.querySelectorAll('.collection-item');

    results.forEach(result => {
        if (result.textContent === userInput) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }

    });


}


function sortTasks() {

    const tasks = document.querySelectorAll('.collection-item');
    if (tasks) {
        taskList.removeChild(taskList.firstChild);
        var i = tasks.length;
        while (i--) {
            taskList.appendChild(tasks[i]);
        }


    }

    ascending.classList.toggle("disabled");
    descending.classList.toggle("disabled");


}


function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}


function reloadPage() {

    location.reload();
}