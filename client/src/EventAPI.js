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

export function addBet(amount, equipa_apostada, user_id, event_id) {
    return axios.post('/addBet', {params: { amount, equipa_apostada, user_id, event_id }}).then(res => res.data);
}

export function fetchChanges(id) {
    return axios.get(`/changes/${id}`,).then(res => res.data); 
}

export function addChange(curr1, taxa, curr2){
    return axios.post('/changes/add', {params: { curr1, taxa, curr2 }}).then(res => res.data); 
}

export function fetchUser(userid) {
    return axios.get(`/user/${userid}`).then(res => res.data);
}

export function checkAdmin(id){
    return axios.get(`/user/check/${id}`).then(res => res.data)
}

export function addEvento(team1, team2, sport, odd1, odd2, odd3){
    return axios.post('/events/add', {params: { team1, team2, sport, odd1, odd2, odd3}}).then(res => res.data);

}

export function addResultado(event_id, winner){
    return axios.post('/events/add/result', {params: { event_id, winner}}).then(res => res.data);
}

