import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <div className='filter-checkbox'>
            <div className={`filter-checkbox__switch-btn ${props.checked ? 'filter-checkbox__switch-on': ''}`} onClick={props.onClick}></div>
            <span className='filter-checkbox__text'>Короткометражки</span>
        </div>
    )
};

export default FilterCheckbox;