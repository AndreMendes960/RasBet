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

export function addBet(name) {
    return axios.post('/currencies', {params: { name }}).then(res => res.data);
}

export function fetchChanges(id) {
    return axios.get('/changes', {params: { id }}).then(res => res.data); 
}

export function addChange(curr1, taxa, curr2){
    return axios.post('/changes/add', {params: { curr1, taxa, curr2 }}).then(res => res.data); 
}