import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import movies from '../../utils/Movies';

function MoviesCardList(props) {
    return (
        <section className={`movies-cards ${props.isSavedMovies ? 'movies-cards_saved' : ''}`}>
            <ul className='movies-cards__container'>
                {
                    props.isSavedMovies 
                        ? movies.filter(movie => movie.isFavorite).map(movie => <MoviesCard 
                            title={movie.title} 
                            duration={movie.duration} 
                            isFavorite={movie.isFavorite} 
                            imageUrl={movie.imageUrl} 
                            isSavedMovies={props.isSavedMovies}
                            key={movie.id} 
                        />)
                        : movies.map(movie => <MoviesCard 
                            title={movie.title} 
                            duration={movie.duration} 
                            isFavorite={movie.isFavorite} 
                            imageUrl={movie.imageUrl} 
                            isSavedMovies={props.isSavedMovies} 
                            key={movie.id} 
                        />)
                }
            </ul>
            {props.isSavedMovies ? '' : <button className='movies-cards__button' type='button'>Ещё</button>}
        </section>
    )
};

export default MoviesCardList;