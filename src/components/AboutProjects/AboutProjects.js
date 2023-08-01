import './AboutProjects.css';
// import Section from '../Section/Section';

function AboutProjects() {
    return (
        <section className='about-project' id='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__container'>
                <div className='about-project__info'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__info'>
                    <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__time-intervals'>
                <h3 className='about-project__period-one'>1 неделя</h3>
                <h3 className='about-project__period-two'>4 недели</h3>
                <p className='about-project__stack'>Back-end</p>
                <p className='about-project__stack'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProjects;