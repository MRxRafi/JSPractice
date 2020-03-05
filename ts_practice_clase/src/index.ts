import { Task } from "./task";
import { TASKS } from "./mock-tasks";
import { TaskFilter } from "./task-filter";

// Elements
const taskListElement: HTMLUListElement = document.querySelector('#taskList');
const taskInputElement: HTMLInputElement = document.querySelector('#taskInput');

const modalElement: HTMLDivElement = document.querySelector('.modal');
const modalYesButton: HTMLButtonElement = modalElement.querySelector('button:first-child');
const modalNoButton: HTMLButtonElement = document.querySelector('button:last-child'); // ¿Segundo boton?
const tasksLeftElement: HTMLParagraphElement = document.querySelector('#tasksLeft');
const allButton: HTMLButtonElement = document.querySelector('');
const pendingButton: HTMLButtonElement = document.querySelector('');
const completedButton: HTMLButtonElement = document.querySelector('');
const filterButtons = [allButton, pendingButton, completedButton];

// Data functions
function listTasks(filter: TaskFilter): Task[] {
    
    return TASKS;
}

function createTask(description: string): Task {
    const tasks = TASKS;
    const newTask: Task = {
        id: tasks.length + 1,
        description: description,
        done: false
    };

    tasks.push(newTask);
    return newTask;
}

function updateTask(task: Task): Task {
    const tasks = TASKS;

    //findIndex te devuelve el indice del elemento que devuelva true (currentTask)
    const index = tasks.findIndex(currentTask => currentTask.id === task.id);

    tasks[index] = task;
    return task;
}

function deleteTask(task: Task): Task {
    const tasks = TASKS;
    const index = tasks.findIndex(currentTask => currentTask.id === task.id);

    const taskRemoved = tasks[index];
    tasks.

}
function tasksLeft(): number {
    const tasks = TASKS;
    return tasks.filter(task => task.done === false).length;
}

// HTML functions
function listTasksElements(element: HTMLUListElement, tasks: Task[]) {
    tasks.forEach(task => element.appendChild(createTaskElement(task)));
}

function createTaskElement(task: Task): HTMLLIElement {
    const li: HTMLLIElement = document.createElement('li');

    li.innerHTML =  `
        <div>
            <input type="checkbox" ${task.done?'checked':''}>
            <span>${task.description}</span>
        </div>
        <i class="material-icons btn-delete">delete_outline</i>
    `;

    li.querySelector('span').onclick = () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = task.description;

        const updateButton = document.createElement('i');
        updateButton.className = 'material-icons'
        updateButton.textContent = 'done';

        updateButton.onclick = () => {
            const updatedTask = {...task};
            updatedTask.description = input.value;
            updateTask(task);

            const updatedTaskElement = createTaskElement(updatedTask);

        }

        li.appendChild(input);
        li.appendChild(updateButton);
        li.classList.add('updating')
    }

    li.querySelector('i').onclick = () => {
        modalElement.querySelector('p').textContent = task.description;
        modalElement.classList.add('open');

        modalYesButton.onclick = () => {
            deleteTask(task);
            li.remove();
            li.classList.remove('open');
        }
    }

    li.querySelector('input').onchange = () => {
        // TODO update Task
        console.log('TODO update task done', task.id);
    }

    return li;
}

function updateTaskLeftElement(){
    tasksLeftElement.textContent = `Quedan ${tasksLeft} tareas.`;
}

function updateFilterButtonsElement(e: MouseEvent){
    const element = e.target as HTMLButtonElement;

    filterButtons.forEach(()=> {

    })
}

// Events
taskInputElement.onkeyup = (e) => {
    const input = e.target as HTMLInputElement;
    if(e.key === 'Enter' && input.value){
        input.focus();
        const task = createTask(input.value);
        const taskElement = createTaskElement(task);
        input.value = '';

        taskListElement.innerHTML += taskElement;
    }
};

modalNoButton.onclick = () => {
    modalElement.classList.remove('open');
}
// Load
listTasksElements(taskListElement, listTasks(TaskFilter.All));
updateTaskLeftElement();