import axios from "axios";


export function fetchEvents() {
    return axios.get('/testing/').then(res => res.data);
}

export function sendRegistar(name, email, password) {
    return axios.post('/registar', {params: { name, email, password }}).then(res => res.data);
}

export function sendLogin(email, password) {
    return axios.post('/login', {params: { email, password }}).then(res => res.data);
}