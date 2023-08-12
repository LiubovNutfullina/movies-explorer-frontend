import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
    const initialArray = window.innerWidth > 880 ? 
        props.movies.slice(0, 12) :
            window.innerWidth <= 880 && window.innerWidth > 440 ?
                props.movies.slice(0, 8) :
                    props.movies.slice(0, 5);

    const [shownCards, setShownCards] = React.useState(initialArray);
    const [showExtend, setShowExtend] = React.useState(props.movies.length !== shownCards.length);

    const handleExtendClick = () => {
        setShownCards(props.movies.slice(0, shownCards.length + (window.innerWidth > 880 ? 3 : window.innerWidth <= 880 ? 2 : 0)));
        if (props.movies.length === shownCards.length) {
            setShowExtend(false);
        }
    }

    window.addEventListener("resize", () => {
        setTimeout(() => {
            const arr = window.innerWidth > 880 ? 
            props.movies.slice(0, 12) :
                window.innerWidth <= 880 && window.innerWidth > 440 ?
                    props.movies.slice(0, 8) :
                        props.movies.slice(0, 5);
            setShownCards(arr);
        }, 0);
    });

    return (
        <section className={`movies-cards ${props.isSavedMovies ? 'movies-cards_saved' : ''}`}>
            <ul className='movies-cards__container'>
                {
                    shownCards.map(movie => <MoviesCard 
                        movie={movie}
                        title={movie.nameRU || movie.nameEN} 
                        duration={movie.duration} 
                        isFavorite={movie.isFavorite} 
                        trailerLink={movie.trailerLink}
                        imageUrl={props.isSavedMovies ? movie.image : props.imgBaseUrl + movie.image.url} 
                        isSavedMovies={props.isSavedMovies} 
                        onRemoveClick={props.onRemoveCardClick}
                        onSaveClick={props.onSaveClick}
                        key={movie.id ?? movie.movieId} 
                        id={movie.id ?? movie.movieId} 
                    />)
                }
            </ul>
            {props.isSavedMovies ? '' : showExtend ? <button className='movies-cards__button' type='button' onClick={handleExtendClick}>Ещё</button> : ''}
        </section>
    )
};

export default MoviesCardList;