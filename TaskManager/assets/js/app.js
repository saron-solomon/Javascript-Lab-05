// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

// Add Event Listener  [Form , clearBtn and filter search input ]


form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

reloadIcon.addEventListener('click', reloadPage);




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