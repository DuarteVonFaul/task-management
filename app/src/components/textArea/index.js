import React, {useState} from "react";
import "./textArea.css";

const TextArea = (props) => {

    const [descricao, setDescricao] = useState('');

    const handleChange = (event) => {
        setDescricao(event.target.value);
    };


    return <textarea className="text-area"
            value={descricao}
            onChange={handleChange}
            placeholder={props.placeholder}
            rows={5} />


}


export default TextArea;