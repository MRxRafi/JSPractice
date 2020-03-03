console.log("Aqui estamos jeje");

// Elements
//const [input, button, counters] = document.querySelectorAll('input, button, #counters');
const input: HTMLInputElement = document.querySelector('input');
const button: HTMLButtonElement = document.querySelector('button');
const counters: HTMLUListElement = document.querySelector('#counters');

//el counters es HTMLUListElements

// Functions
function count(miliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
}

function addCounter(seconds: number) {
    let c = 0;

    const counter = document.createElement('li');
    counter.textContent = `0/${seconds}`;

    const interval = setInterval(() => {
        c++;
        console.log(`counter: ${c}/${seconds}`)
        counter.textContent = `${c}/${seconds}`;
    }, 1000);
    counters.appendChild(counter);

    function stopCounter () {
        clearInterval(interval);
        counter.remove();
    }

    counter.onclick = stopCounter;

    count(seconds * 1000).then(stopCounter);
}

// Events
input.onkeyup = (e) => {
    const inputElement = e.target as HTMLInputElement;
    const seconds = inputElement.value;
    // Al target value hay que forzarle 
    // const inputElement = e.target as HTMLInputElement
    // const seconds = inputElement.value;

    button.textContent = seconds ? `Contar ${seconds} segundos` : 'Contar';

    if (e.key === 'Enter') {
        button.click();
    }
}

button.onclick = () => {
    const c_number: number = parseInt(input.value);
    if (c_number) {
        addCounter(c_number);
    }
    input.focus();
    input.select();
}