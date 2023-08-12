import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {
    const [value, setValue] = React.useState('');
    const [validationErrorText, setValidationErrorText] = React.useState('');

    React.useEffect(() => {
        if (props.initialValue) {
            setValue(props.initialValue)
        }
    }, [])

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (value) {
            setValidationErrorText('');
            props.onSearch(value);
        } else {
            setValidationErrorText('Нужно ввести ключевое слово');
        }
    }

    const handleCheckboxClick = () => {
        props.checkBoxClicked();
    }

    return (
        <section className='search'>
            <form className='search__form'>
                <input
                    className='search__input'
                    placeholder='Фильм'
                    value={value}
                    required={true}
                    type='text'
                    onChange={handleInputChange}
                />
                <button className='search__button' type='submit' onClick={handleButtonClick}>Поиск</button>
            </form>
            {validationErrorText ? <span>{validationErrorText}</span> : ''}
            <FilterCheckbox checked={props.checkboxChecked} onClick={handleCheckboxClick}/>
        </section>
    )
};

export default SearchForm;