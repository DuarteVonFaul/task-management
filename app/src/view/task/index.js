import React from "react";
import "./task.css"
import TextField from "../../components/textField";
import TextArea from "../../components/textArea";
import Button from "../../components/button";
import ComboBox from "../../components/combobox";
import { useState } from "react";
import DatePickerComponent from "../../components/dataPicker";

const Task = (props) => {

    const [formValues, setFormValues] = useState({
        title: "",
        developer: "",
        description: "",
        date: null
      });
    
      const handleChange = (fieldName,event) => {
        const novoValor = event.target.value;
        setFormValues({
          ...formValues,
          [fieldName]: novoValor,
        });
      };
    
      const handleSubmit = (event) => {
        console.log('Valores do formulário:', formValues);
        event.preventDefault();
    
        // Aqui você pode fazer algo com os dados do formulário, por exemplo, criar uma nova tarefa
        const newTask = {
          title: formValues.title,
          Responsibility_by: formValues.developer,
          description: formValues.description,
          completed: false,
          date:formValues.date
        };
    
        // Faça algo com a nova tarefa, por exemplo, passar para uma função de propriedade
        console.log(newTask)
        props.onTaskSubmit(newTask);
    
        // Limpe o formulário ou faça outras ações necessárias
        setFormValues({
          title: "",
          developer: "",
          description: "",
        });
      
      };


    return <form className="register-task" onSubmit={handleSubmit}>
     <TextField
        type="text"
        placeholder="Titulo"
        value={formValues.title}
        onChange={(value) => handleChange("title", value)}
      />
      <div className="section">
        <ComboBox
          develops={props.develops}
          value={formValues.developer}
          onChange={(value) => handleChange("developer", value)}
        />
        <DatePickerComponent
        selected={formValues.date}
        onChange={(date) => handleChange("date", { target: { value: date } })}
        ></DatePickerComponent>
      </div>
      
      <TextArea
        placeholder="Digite a descrição"
        value={formValues.description}
        onChange={(value) => handleChange("description", value)}
      />
      <Button nameButton="Cadastrar" type="submit" />
    </form>

}


export default Task;