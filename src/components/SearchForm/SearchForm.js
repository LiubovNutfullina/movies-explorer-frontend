import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
    return (
        <section className='search'>
            <form className='search__form'>
                <input className='search__input' placeholder='Фильм'></input>
                <button className='search__button' type='submit'>Поиск</button>
            </form>
            <FilterCheckbox />
        </section>
    )
};

export default SearchForm;