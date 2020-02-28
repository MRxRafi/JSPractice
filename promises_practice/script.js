const [input, button, counters] = document.querySelectorAll('button, input, #counters');

function count(seconds) {
   return new Promise(resolve => {
       let index = setTimeout(() => {
        resolve(index);
       }, seconds*1000);

    })
}

function addCounter(totalTime) {
    let seconds = 0;
    const li = document.createElement('li');
    li.textContent = `0/${input.value}`;

    const interval = setInterval(() => {
        seconds++;
        li.textContent = `${seconds}/${totalTime}`;
        console.log(`Contador ${seconds}`);
    }, 1000);

    counters.appendChild(li);



    count(seconds).then(index => {
        clearInterval(interval);
        li.remove();
        clearTimeout(index);
    });

}

button.onclick = () => {  
    input.value ? addCounter(input.value) : '';

    input.select();
    input.focus();
}

input.onkeyup = (e) => {
    const seconds = e.target.value;
    button.textContent = seconds === '' ? 'Contar' : `Contar ${seconds} segundos.`;
    e.key === 'Enter' ? button.click() : '';
};

