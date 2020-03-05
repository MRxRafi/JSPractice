import { Task } from "./task";
import { TASKS } from "./mock-tasks";

// Elements
const taskListElement: HTMLUListElement = document.querySelector('#taskList');
const taskInputElement: HTMLInputElement = document.querySelector('#taskInput');

// Data functions
function listTasks(): Task[] {
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
        // TODO update Task
        console.log('TODO update task description', task.id);
    }

    li.querySelector('i').onclick = () => {
        // TODO delete Task
        console.log('TODO delete task', task.id);
    }

    li.querySelector('input').onclick = () => {
        // TODO update Task
        console.log('TODO update task done', task.id);
    }

    return li;
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
// Load

listTasksElements(taskListElement, listTasks());