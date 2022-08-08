import React from "react";


const FooterLanding = () => {
    return(
        <section className='footer'>
            <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className='footer__container'>
                <span className='footer__date'>&copy; Сергей Матросов {new Date().getFullYear()}</span>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__link' href='https://github.com/Sergynya174' target='_blank' rel='noreferrer'>Github</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__link' href='https://vk.com/bear_74' target='_blank' rel='noreferrer'>VK</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FooterLanding;