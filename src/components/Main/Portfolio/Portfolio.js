import React from "react";
import './Portfolio.css';

const Portfolio = () => {
    return(
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://sergynya174.github.io/how-to-learn/' target='_blank' rel='noreferrer'>
                        <p className='portfolio__link-text'>Статичный сайт</p>
                        <p className='portfolio__link-icon'>↗</p>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://sergynya174.github.io/russian-travel/' target='_blank' rel='noreferrer'>
                        <p className='portfolio__link-text'>Адаптивный сайт</p>
                        <p className='portfolio__link-icon'>↗</p>
                    </a>
                    
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://github.com/Sergynya174/react-mesto-api-full' target='_blank' rel='noreferrer'>
                        <p className='portfolio__link-text'>Одностраничное приложение</p>
                        <p className='portfolio__link-icon'>↗</p>
                    </a>
                    
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;