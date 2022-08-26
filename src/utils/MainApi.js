import { BASE_URL } from './constants';

class MainApi {
    constructor(data) {
        this._baseUrl = data.serverUrl;
    }

    _reguestResult(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(
                `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
            );
        }
    }

    getUsers() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
        .then((res) => this._requestResult(res));
    }
    
    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
        .then((res) => this._requestResult(res));
    }
    
    updateUser(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        })
        .then((res) => this._requestResult(res));
    }
    
    addNewMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration, 
                year: data.year, 
                description: data.description,
                image: data.image,
                trailer: data.trailerLink,
                thumbnail: data.thumbnail,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        })
        .then((res) => this._requestResult(res));
    }
    
    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
        .then((res) => this._requestResult(res));
    }
    
    login(email, password){
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
        })
    };
    
    register(name, email, password){
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        })
        .then(res => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
        })
    };
}

const mainApi = new MainApi({
    serverUrl: BASE_URL,
});
  
export default mainApi;