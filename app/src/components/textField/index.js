import React from "react";
import "./textField.css"


const TextField = (props) => {

    return <>
        <input  className="text-field" 
                type={props.type} 
                placeholder={props.placeholder}
                onChange={props.onChange}></input>
    </>

};

export default TextField;