import './AboutMe.css';
import photo from '../../images/IMG_4523.jpg';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>                    
                <div className='about-me__content'>
                    <h3 className='about-me__name'>Любовь</h3>
                    <p className='about-me__subtitle'>Фронтенд-разработчик, 27 лет</p>
                    <p className='about-me__about'>Ахмед спас Джона от смерти, и теперь тот должен вернуть долг. Гай Ричи как никогда серьезен — и как всегда крут</p>
                    <a className='about-me__link' href='https://github.com/LiubovNutfullina' target='blank'>Github</a>
                </div>
                <img 
                    className='about-me__avatar'
                    alt='Здесь изображено мое фото'
                    src={photo}
                />
            </div>
        </section>
        
    )
}

export default AboutMe;
