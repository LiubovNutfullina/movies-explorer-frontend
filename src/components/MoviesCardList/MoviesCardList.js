import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import movies from '../../utils/Movies';

function MoviesCardList(props) {
    return (
        <section className='movies-cardlist'>
            <article className='movies-cardlist__container'>
                {
                    props.isSavedMovies 
                        ? movies.filter(movie => movie.isFavorite).map(movie => <MoviesCard 
                            title={movie.title} 
                            duration={movie.duration} 
                            isFavorite={movie.isFavorite} 
                            imageUrl={movie.imageUrl} 
                            isSavedMovies={props.isSavedMovies} 
                        />)
                        : movies.map(movie => <MoviesCard 
                            title={movie.title} 
                            duration={movie.duration} 
                            isFavorite={movie.isFavorite} 
                            imageUrl={movie.imageUrl} 
                            isSavedMovies={props.isSavedMovies} 
                        />)
                }
            </article>
            {props.isSavedMovies ? '' : <button className='movies-cardlist__button' type='button'>Ещё</button>}
        </section>
    )
};

export default MoviesCardList;