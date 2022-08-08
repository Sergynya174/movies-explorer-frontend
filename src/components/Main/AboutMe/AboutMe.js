import React from "react";
import './AboutMe.css';
import foto from "../../../images/foto.png";

const AboutMe = () => {
    return (
        <section id='about-me' className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__content'>
                <div className='about-me__info'>
                    <h2 className='about-me__name'>Сергей</h2>
                    <h4 className='about-me__subtitle'>Junior frontend-разработчик, 29 лет</h4>
                    <p className='about-me__text'>Я живу в Москве. Учусь на курсах веб-разработчика в Яндекс.Практикуме. Мне нравится, что профессия Frontend-разработчика оставляет пространство для
                        творчества, потому что любую программу можно написать множеством способов с разными
                        подходами. Решил сменить сферу деятельности, потому что есть возможность удаленной
                        работы. Смотрю несколько блогов на youtube о веб&nbsp;разработке “Ulbi TV” и “WAYUP &#38; Андрей
                        Гаврилов”, читаю книгу “JavaScript Полное руководство”. Люблю походы на природу, играть
                        в волейбол, слушать музыку.
                    </p>
                    <div className='about-me__links'>
                        <a
                        className='about-me__link'
                        href='https://vk.com/bear_74'
                        target='_blank'
                        rel='noreferrer'
                        >
                        VK
                        </a>
                        <a
                        className='about-me__link'
                        href='https://github.com/Sergynya174'
                        target='_blank'
                        rel='noreferrer'
                        >
                        Github
                        </a>
                        <a
                        className='about-me__link'
                        href='https://t.me/SergoMatrosov174'
                        target='_blank'
                        rel='noreferrer'
                        >
                        Tg
                        </a>
                    </div>
                </div>
                <div className='about-me__photo-container'>
                    <img className='about-me__photo' src={foto} alt='Фотография'/>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;