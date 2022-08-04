import React from "react";
import './AboutProject.css';

const AboutProject = () => {
    return (
        <section className='about-project' id='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__text'>
                <div className='about-project__column'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__column'>
                    <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__timeline'>
                <span className='about-project__week about-project__week_backend'>1 неделя</span>
                <span className='about-project__week '>4 недели</span>
                <span className='about-project__view'>Back-end</span>
                <span className='about-project__view'>Front-end</span>
            </div>
        </section>
    )
}

export default AboutProject;