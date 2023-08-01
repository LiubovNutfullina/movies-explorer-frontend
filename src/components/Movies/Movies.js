import './Movies.css';
import React from 'react';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function Movies() {
    return (
        <main className='movies'>
            <Header isMainPage={false} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </main>
    )
};

export default Movies;