import { MOVIES_URL } from "./constants";

class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResult = (res) => {
        return res.ok
            ? res.json()
            : Promise.reject(
                `Ошибка: ${res.status}: ${res.statusText}`
            );
    }

    getMovies() {
        return fetch(this._baseUrl, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._checkResult);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: MOVIES_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default moviesApi;