import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {

    const [isFavorite, setIsFavorite] = React.useState(props.isFavorite);

    const handleRemoveClick = () => {
        console.log(props.movie._id)
        props.onRemoveClick(props.movie._id)
    }

    const handleSaveClick = () => {
        props.onSaveClick(props.movie, isFavorite).then(() => {
            setIsFavorite(!isFavorite);
        });
    }

    return (
        <li className='movies-card'>
            <div className='movies-card__container'>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{props.title}</h2>
                    <p className='movies-card__duration'>{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</p>
                </div>
                {props.isSavedMovies
                    ? (<button type='button' className='movies-card__delete-button' onClick={handleRemoveClick}></button>) 
                    : (<button
                        type='button'
                        className={`${isFavorite ? 'movies-card__save-button-active' : 'movies-card__save-button'}`} 
                        onClick={handleSaveClick}
                        ></button>)}
            </div>
            <a className='movie-card__link' href={props.trailerLink} target='blank'>
                <img className='movies-card__image' src={props.imageUrl} alt={props.title} />
            </a>
        </li>
    )
};

export default MoviesCard;