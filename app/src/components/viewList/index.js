import React from "react";
import "./viewList.css"


const ViewList = (props) => {

    const handleClick = (taskId) => {
        const itemIndex = props.tasks.findIndex((item) => item.id === taskId);
        const newTasks = [...props.tasks];
        newTasks[itemIndex].completed = !newTasks[itemIndex].completed;
        props.atualizarTarefas(newTasks);
      };
    
      return (
        <ul className="view-list">
          {props.tasks.map((item) => (
            <li key={item.id} className={`item ${item.completed ? 'is-completed' : ''}`}>
              <span>{item.title}</span>
              <button onClick={() => handleClick(item.id)}></button>
            </li>
          ))}
        </ul>
      );
    };


export default ViewList;

