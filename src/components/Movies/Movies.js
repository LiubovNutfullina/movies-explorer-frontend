import './Movies.css';
import React from 'react';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';

function Movies(props) {
    const [moviesShown, setMoviesShown] = React.useState(false);
    const [loadedMovies, setLoadedMovies] = React.useState([]);
    const [loadedSavedMovies, setLoadedSavedMovies] = React.useState([]);
    const [preloaderShown, setPreloaderShown] = React.useState(false);
    const [movies, setMovies] = React.useState([]);
    const [checkboxChecked, setCheckboxChecked] = React.useState(false);
    const [searchInputValue, setSearchInputValue] = React.useState('');
    const [errorText, setErrorText] = React.useState('Нет результатов');


    React.useState(() => {
        setCheckboxChecked(localStorage.getItem('checkbox') === 'true');
        setSearchInputValue(localStorage.getItem('searchValue'));
        setMovies(JSON.parse(localStorage.getItem('movies')) ?? []);
    }, []);

    const loadMovies = (value) => {
        setPreloaderShown(true);
        return Promise.all([
            mainApi.getMoviesCards(),
            moviesApi.getMoviesCards(),
        ]).then(([savedMovies, allMovies]) => {
            allMovies.forEach(movie => {
                movie.isFavorite = savedMovies.some(savedMovie => savedMovie.movieId === movie.id);
            });
            setSearchInputValue(value);
            setLoadedMovies(allMovies);
            setLoadedSavedMovies(savedMovies);
            setPreloaderShown(false);
            localStorage.setItem('searchValue', value);
        })
    }

    const handleSearch = (value) => {
        if (!loadedMovies.length) {
            loadMovies(value).catch(() => {
                setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            });
        } else {
            setSearchInputValue(value);
        }        
    }

    React.useEffect(() => {
        if (movies.length) {
            setMoviesShown(false);
            setMoviesShown(true);
        } else {
            setMoviesShown(false);
        }
    }, [movies]);

    React.useEffect(() => {
        if (loadedMovies.length && Boolean(searchInputValue)) {
            setMovies([]);
            setTimeout(() => {
                const moviesToSet = loadedMovies.filter((movie) => 
                checkboxChecked ?
                        ((movie.nameRU.toUpperCase().includes(searchInputValue.toUpperCase())
                        || movie.nameEN.toUpperCase().includes(searchInputValue.toUpperCase())) && (movie.duration <= 40)) :
                        (movie.nameRU.toUpperCase().includes(searchInputValue.toUpperCase())
                        || movie.nameEN.toUpperCase().includes(searchInputValue.toUpperCase())));
                localStorage.setItem('movies', JSON.stringify(moviesToSet));
                setMovies(moviesToSet);
            }, 0)
        }
    }, [loadedMovies, searchInputValue, checkboxChecked]);

    const handleCheckBoxClick = () => {
        if (!loadedMovies.length) {
            loadMovies(searchInputValue).then(() => {
                localStorage.setItem('checkbox', !checkboxChecked);
                setCheckboxChecked(!checkboxChecked);
            });
        } else {
            localStorage.setItem('checkbox', !checkboxChecked);
                setCheckboxChecked(!checkboxChecked);
        }
    }

    const handleSaveClick = (movie, isFavorite) => {
        loadedMovies.forEach(currMovie => {
            if (currMovie.id === movie.id) {
                currMovie.isFavorite = !isFavorite;
            }
        });
        return isFavorite ?
            mainApi.deleteMovieCard(loadedSavedMovies.find(savedMovie => savedMovie.movieId === movie.id)._id) : mainApi.addNewSavedMovieCard(  
                movie.country,
                movie.director,
                movie.duration,
                movie.year,
                movie.description,
                moviesApi.BASE_URL + movie.image.url,
                movie.trailerLink,
                moviesApi.BASE_URL + movie.image.formats.thumbnail.url,
                movie.id,
                movie.nameRU,
                movie.nameEN,
            ).then((value)=>{
                setLoadedSavedMovies(loadedSavedMovies.concat([value]));
            });
    }

    return (
        <main className='movies'>
            <Header isMainPage={false} isLoggedIn={true}/>
            <SearchForm 
                onSearch={handleSearch} 
                checkboxChecked={checkboxChecked} 
                checkBoxClicked={handleCheckBoxClick} 
                initialValue={searchInputValue}
            />
            {moviesShown 
                ? <MoviesCardList movies={movies} imgBaseUrl={moviesApi.BASE_URL} onSaveClick={handleSaveClick}/> 
                : preloaderShown 
                ? <Preloader/> 
                : <p className='movies__text-not-result'>{errorText}</p>
            }
            <Footer />
        </main>
    )
};

export default Movies;