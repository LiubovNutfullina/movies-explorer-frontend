import React from "react";
import './Input.css';
import { validateInput } from '../../utils/constants';

function Input(props) {
    const [validationError, setValidationError] = React.useState('');
    const [readOnly, setReadOnly] = React.useState(true);

    const handleValueChange = (e) => {
        
        if(!e.target.validity.valid) {
            setValidationError(e.target.validationMessage)
            return;
        } 
        
        if (!validateInput(props.id, e.target.value)) {
            setValidationError('Некорректное значение')
        } else {
            setValidationError('')
        }
    }

    return (
        <>
            <div className='input'>
                <label className='input__label'>{props.label}</label>
                <input
                    type={props.type}
                    id={props.id}
                    className={`input__text input ${validationError ? 'input__text_error' : ''}`}
                    required={props.required}
                    minLength={props.min}
                    maxLength={props.max}
                    onChange={handleValueChange}
                    defaultValue={props.defaultValue || ''}
                    readOnly={readOnly}
                    onFocus={ () => setReadOnly(false) }
                    onBlur={ () => setReadOnly(true) }
                    autoComplete="off"
                />
            </div>
            <span className={`input__error ${validationError ? 'input__error_active' : ''}`}>
                {validationError}
            </span>
        </>
    );
}

export default Input;