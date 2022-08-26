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

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
        .then(this._requestResult);
    }
    
    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
        .then(this._requestResult);
    }
    
    updateUser(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        })
        .then(this._requestResult);
    }
    
    addNewMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                country: data.country || ' ',
                director: data.director || ' ',
                duration: data.duration || 0,
                year: data.year || ' ',
                description: data.description || ' ',
                image: `${this._apiURL}${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `${this._apiURL}${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU || ' ',
                nameEN: data.nameEN || ' ',
            }),
        })
        .then((res) => res.json());
    }
    
    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
        .then(this._requestResult);
    }
    
    login(data){
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then(this._requestResult)
    };
    
    register(data){
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            })
        })
        .then(this._requestResult)
    };
}

const mainApi = new MainApi({
    serverUrl: BASE_URL,
});
  
export default mainApi;