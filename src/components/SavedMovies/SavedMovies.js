import './SavedMovies.css';
import React from 'react';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function SavedMovies() {

    const [moviesShown, setMoviesShown] = React.useState(false);
    const [loadedMovies, setLoadedMovies] = React.useState([]);
    const [preloaderShown, setPreloaderShown] = React.useState(false);
    const [movies, setMovies] = React.useState([]);
    const [checkboxChecked, setCheckboxChecked] = React.useState(false);
    const [searchInputValue, setSearchInputValue] = React.useState('');
    const [errorText, setErrorText] = React.useState('Ничего не найдено');

    const handleSearch = (value) => {
        setSearchInputValue(value);        
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
        setPreloaderShown(true);
        mainApi.getMoviesCards().then(cards => {
            setLoadedMovies(cards);
            setPreloaderShown(false);
        }).catch(() => {
            setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        });
    }, []);

    React.useEffect(() => {
        if (loadedMovies.length) {
            setMovies([]);
            setTimeout(() => {
                setMovies(loadedMovies.filter((movie) => 
                checkboxChecked ?
                        ((movie.nameRU.toUpperCase().includes(searchInputValue.toUpperCase())
                        || movie.nameEN.toUpperCase().includes(searchInputValue.toUpperCase())) && (movie.duration <= 40)) :
                        (movie.nameRU.toUpperCase().includes(searchInputValue.toUpperCase())
                        || movie.nameEN.toUpperCase().includes(searchInputValue.toUpperCase()))))
            }, 0)
        }
    }, [loadedMovies, searchInputValue, checkboxChecked]);

    const handleCheckBoxClick = () => {
        setCheckboxChecked(!checkboxChecked);
    }

    const handleRemoveCardClick = (cardId) => {
        const filteredMovies = movies.filter(movie => movie._id !== cardId);
        mainApi.deleteMovieCard(cardId).then(() => {
            setLoadedMovies(filteredMovies);
            if (!filteredMovies.length) {
                setMovies([]);
            }
        }).catch(res=>console.log(res));
    }

    return (
        <section className='movies'>
            <Header isLoggedIn={true} isMainPage={false} />
            <SearchForm onSearch={handleSearch} checkboxChecked={checkboxChecked} checkBoxClicked={handleCheckBoxClick}/>
            {moviesShown 
                ? <MoviesCardList 
                    movies={movies} 
                    imgBaseUrl={moviesApi.BASE_URL} 
                    isSavedMovies={true} 
                    onRemoveCardClick={handleRemoveCardClick}/> 
                : preloaderShown 
                ? <Preloader/> 
                : <p className='movies__text-not-result'>{errorText}</p>
            }
            <Footer />
        </section>
    )
};

export default SavedMovies;