import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./dataPicker.css"

const DatePickerComponent = (props) => {

  return (
    <div>
      <DatePicker className='data-picker'
        selected={props.selected}
        onChange={props.onChange}
        dateFormat="dd/MM/yyyy" // Formato da data
        placeholderText="Selecione uma data"
      />
    </div>
  );
};

export default DatePickerComponent;