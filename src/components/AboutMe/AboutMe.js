import './AboutMe.css';
import photo from '../../images/pic__COLOR_pic.png'
// import CurrentUserContext from '../../contexts/CurrentUserContext';

function AboutMe() {
    // const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className='about-me' id='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>                    
                <div className='about-me__content'>
                    <h3 className='about-me__name'>Ahmed</h3>
                    <p className='about-me__subtitle'>Translater, 40let</p>
                    <p className='about-me__about'>Ахмед спас Джона от смерти, и теперь тот должен вернуть долг. Гай Ричи как никогда серьезен — и как всегда крут</p>
                    <a className='about-me__link' href='https://github.com/LiubovNutfullina'>Github</a>
                </div>
                <img 
                    className='about-me__avatar'
                    alt='Здесь изображен аватар'
                    src={photo}
                />
            </div>
            {/* <h2 className='about-me__name'>{currentUser.name}</h2>
                    <p className='about-me__subtitle'>{currentUser.work}</p>
                    <p className='about-me__about'>{currentUser.about}</p>
                    <p className='about-me__link'>{currentUser.link}</p> */}
        </section>
        
    )
}

export default AboutMe;
