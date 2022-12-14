import React from 'react';
import '../static/css/components/Input.css';

export default function Input({ label, placeholderText, type, name, value, onChange, customStyling, disabled }) {
    return (
        <div className='input-container'>
            <label>{label}</label>
            <input id={customStyling} type={type} placeholder={placeholderText} name={name} value={value} onChange={onChange} disabled={disabled}></input>
        </div>
    )
}
