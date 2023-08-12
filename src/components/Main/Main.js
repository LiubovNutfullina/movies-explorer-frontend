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
    
    const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(localStorage.getItem("jwt")));

    React.useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem("jwt")));
    },[]);

    return (
        <div className='main'>
            <Header isLoggedIn={isLoggedIn} />
            <Promo />
            <AboutProjects />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Main;