/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './Portfolio.css';

const Portfolio = () => {
    return(
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://sergynya174.github.io/how-to-learn/' target='_blank' rel='noreferrer'>Статичный сайт</a>
                    <p className='portfolio__link-icon'>↗</p>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://sergynya174.github.io/russian-travel/' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                    <p className='portfolio__link-icon'>↗</p>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://github.com/Sergynya174/react-mesto-api-full' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
                    <p className='portfolio__link-icon'>↗</p>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;