import React from 'react';
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [...props.TASKS]};

        this.destroyLi = this.destroyLi.bind(this);
    };

    destroyLi(task) {
        const copy = [...this.state.tasks];
        copy.splice(copy.indexOf(task), 1);
        this.setState({tasks: copy});
    }

    render() {
        const tasks_list = this.state.tasks.map((task) => {
            return (
                <li key={task.id}>
                    <div>
                        <input type="checkbox" defaultChecked={task.checked ? 'checked' : ''}/>
                        <span>{task.description}</span>
                    </div>
                    <i className="material-icons" onClick={() => this.destroyLi(task)}>
                        mood_bad
                    </i>
                </li>
            )
        });
    
        return (
            <main>
                <label>
                    <input type="text" placeholder="¿Qué deseas hacer?"/>
                </label>
                <ul className="taskList">
                    {tasks_list}
                </ul>
                <div className="info">
                    <p>Quedan x tareas</p> {/* TODO Fill 'x' with the number of tasks */}
                    <div>
                        <button disabled>Todas</button>
                        <button>Pendientes</button>
                        <button>Completadas</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default TodoList;