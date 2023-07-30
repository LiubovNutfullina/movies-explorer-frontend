import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
    return (
        <article className='movies-card'>
            <div className='movies-card__container'>
                <div className='movies-card__info'>
                    <h2 className='movies-card__title'>{props.title}</h2>
                    <p className='movies-card__duration'>{props.duration}</p>
                </div>
                {props.isSavedMovies
                    ? (<button type='button' className='movies-card__delete-button'></button>) 
                    : (<button type='button' className={`${props.isFavorite ? 'movies-card__save-button_active' : 'movies-card__save-button'}`}></button>)}
            </div>
            <img className='movies-card__image' src={props.imageUrl} alt={props.title} />
        </article>
    )
};

export default MoviesCard;