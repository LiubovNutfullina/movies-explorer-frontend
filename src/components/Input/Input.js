import React from "react";
import './Input.css';

function Input(props) {
    return (
        <div className='input'>
            <span className='input__placeholder'>{props.placeholder}</span>
            <input
                type={props.type}
                id={props.id}
                className={`input__text`}
                required
                minLength={props.min}
                maxLength={props.max}
            />
        </div>
    );
}

export default Input;