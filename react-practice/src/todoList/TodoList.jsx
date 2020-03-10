import React from 'react';
import './TodoList.css'

function TodoList(){
    return (
        <main>
            <label>
                <input type="text" placeholder="¿Qué deseas hacer?"/>
            </label>
            <ul>
                {/* It get filled with the map property */}
            </ul>
            <div>
                <p>Quedan x tareas</p> {/* TODO Fill 'x' with the number of tasks */}
                <button>Todas</button>
                <button>Pendientes</button>
                <button>Completadas</button>
            </div>
        </main>
    );
}

export default TodoList;