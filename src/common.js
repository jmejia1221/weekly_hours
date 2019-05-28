import axios from 'axios';

var token = null;
if (localStorage.token) {
    token = `Token ${localStorage.token}`;
}

export const HTTP = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Authorization: token
    }
})