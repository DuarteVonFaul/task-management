import React, { useState } from 'react';
import "./comboBox.css"

const ComboBox = (props) => {
  const [selection, setSelection] = useState('');

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div>
      <select className='combo-box' id="combobox" value={selection} onChange={handleChange}>
      <option id={0} value="Responsavel">Responsavel</option>
        {props.develops.map((item,index) => (
            <option id={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;