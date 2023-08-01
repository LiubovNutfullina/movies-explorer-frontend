import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <form className='filter-checkbox'>
            <div className='filter-checkbox__switch-btn filter-checkbox__switch-on' />
            <span className='filter-checkbox__text'>Короткометражки</span>
        </form>
    )
};

export default FilterCheckbox;