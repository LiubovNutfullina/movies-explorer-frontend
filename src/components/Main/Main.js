import './Main.css';
import React from "react";
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProjects from '../AboutProjects/AboutProjects.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Potrfolio.js';
import Footer from '../Footer/Footer.js';

function Main() {
        return (
        <main className='main'>
            <Header isMainPage={true} />
            <Promo />
            <AboutProjects />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;