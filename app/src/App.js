import React from "react";
import './App.css' 
import { useState } from "react";
import ViewList from "./components/viewList";
import Task from "./view/task";
import AccessSpreadsheet from "./utils/client/googleSheet.js";


const App = ()=>{

  const [develops, setDevelops] = useState(["Rennan",
                                            "Guilherme",
                                            "Silva",
                                            "Israel"])
                                         
  const [tasks, setTasks] = useState([
    { 
      id:'1',
      title:"Ler Livro",
      description:"",
      Responsibility_by:"",
      date:"2023-11-24",
      completed: false
    },
  ])



  const atualizarTarefas = (novasTarefas) => {
    setTasks(novasTarefas);
  };

  const appendTask = (newTask) => {
    newTask.id = (tasks.length + 1).toString();
    setTasks([...tasks, newTask]); 
  }
  return<>
    
    <body>
      <div className="container">
        <h1>Tasks</h1>
        <ViewList tasks={tasks} atualizarTarefas={atualizarTarefas}></ViewList>
      </div>
      <div className="container">
        <h1>Task Register</h1>
        <Task develops={develops} onTaskSubmit={appendTask}></Task>
      </div>
      <AccessSpreadsheet>
        
      </AccessSpreadsheet>
    </body>

  </> 
}


export default App;