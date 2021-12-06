import axios from "axios";


export function fetchEvents() {
    return axios.get('/testing/').then(res => res.data);
}