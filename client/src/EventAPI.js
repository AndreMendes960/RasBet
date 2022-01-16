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

export function fetchCurrencies() {
    return axios.get('/currencies').then(res => res.data);
}

export function addCurrency(name) {
    return axios.post('/currencies', {params: { name }}).then(res => res.data);
}