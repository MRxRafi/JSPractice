// ELEMENTOS
const addTaskInput: HTMLInputElement = document.querySelector('#addTaskInput') as HTMLInputElement;
const taskList: HTMLUListElement = document.querySelector('#taskList') as HTMLUListElement;
const tasksLeft = document.querySelector('#tasksLeft');
const modal = document.querySelector('.modal-container');
const p = document.querySelector('.modal p');
const info: HTMLDivElement = document.querySelector('.info div') as HTMLDivElement;
const completedButton: HTMLButtonElement = document.querySelector('#completedButton') as HTMLButtonElement;
const pendingButton: HTMLButtonElement = document.querySelector('#pendingButton');
const allButton: HTMLButtonElement = document.querySelector('#allButton');

//EVENTOS
addTaskInput.addEventListener('keyup', (e) => {
    const evento = e as KeyboardEvent;
    if(evento.key === 'Enter'){
        createElements();
    }
})

completedButton.addEventListener('click', buttonFunctionality);
pendingButton.addEventListener('click', buttonFunctionality);
allButton.addEventListener('click', buttonFunctionality);

//METODOS
function createElements(){
    if(addTaskInput.value != ''){
        let listItem: HTMLLIElement = document.createElement("li") as HTMLLIElement;
        let cb: HTMLInputElement = document.createElement("input") as HTMLInputElement;
        let dv: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        let icon: HTMLElement = document.createElement("i") as HTMLElement;
        let sp: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
        
        //listItem.className = "updating";
        icon.className = "material-icons btn-delete";
        icon.textContent = "delete_outline";
        sp.textContent = addTaskInput.value;
        cb.type = "checkbox";

        dv.appendChild(cb);
        dv.appendChild(sp);
        listItem.appendChild(dv);
        listItem.appendChild(icon);
        
        taskList.appendChild(listItem);
    }
}

function createCBFunctionality(){

}

function buttonFunctionality(e: Event) {
    let targetB: HTMLButtonElement = e.target as HTMLButtonElement;
    console.log(info.childNodes);
    info.childNodes.forEach((n: HTMLButtonElement) => {
        if (targetB.id != n.id && n.disabled) n.disabled = false;
    })
    
    if(!targetB.disabled) targetB.disabled = true;
}