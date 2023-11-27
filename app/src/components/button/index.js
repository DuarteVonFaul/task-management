import React from 'react';
import './button.css';


const Button = (props) => {
  const nameButton = props.nameButton;
  
  return (
    <button className='button' type={props.type} onClick={props.fetch}>
      <span>{nameButton}</span>
    </button>
  );
};

export default Button;