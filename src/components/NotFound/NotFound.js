import { useNavigate } from "react";
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    const comeBack = () => navigate(-1);

    return(
        <section className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__text'>Страница не найдена</p>
            <Link className='not-found__button' to='/' onClick={comeBack}>Назад</Link>
        </section>
    )
}

export default NotFound;