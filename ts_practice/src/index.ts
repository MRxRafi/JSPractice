// ELEMENTOS
const addTaskInput: HTMLInputElement = document.querySelector('#addTaskInput') as HTMLInputElement;
const taskList: HTMLUListElement = document.querySelector('#taskList') as HTMLUListElement;
const tasksLeft = document.querySelector('#tasksLeft');
const modal = document.querySelector('.modal-container');
const p = document.querySelector('.modal p');
const info: HTMLDivElement = document.querySelector('.info div');
const completedButton: HTMLButtonElement = document.querySelector('#completedButton');
const pendingButton: HTMLButtonElement = document.querySelector('#pendingButton');
const allButton: HTMLButtonElement = document.querySelector('#allButton');
const icons: Array<HTMLElement> = new Array();

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
        icons.push(icon);
        sp.textContent = addTaskInput.value;
        cb.type = "checkbox";

        dv.appendChild(cb);
        dv.appendChild(sp);
        listItem.appendChild(dv);
        listItem.appendChild(icon);
        
        taskList.appendChild(listItem);
    }
}

function buttonFunctionality(e: Event) {
    let targetB: HTMLButtonElement = e.target as HTMLButtonElement;
    info.childNodes.forEach((n: HTMLButtonElement) => {
        if (targetB.id != n.id && n.disabled) n.disabled = false;
    })
    
    // Hide elements that match the button clicked
    let listElements: NodeList = taskList.childNodes;
    listElements.forEach((n: HTMLLIElement) => {
        if(n.nodeName === 'LI'){
            let cb: HTMLInputElement;
            n.firstChild.childNodes.forEach((el: HTMLInputElement) => {
                if(el.nodeName === 'INPUT') cb = el;
            })
            switch(targetB.textContent){
                case 'Todas':
                    n.style.display = 'flex';
                    break;
                case 'Pendientes':
                    if(!cb.checked) n.style.display = 'flex';
                    if(cb.checked) n.style.display = 'none';
                    break;
                case 'Completadas':
                    if(!cb.checked) n.style.display = 'none';
                    if(cb.checked) n.style.display = 'flex';
                    break;
            }
        }
        
    })
    if(!targetB.disabled) targetB.disabled = true;
}