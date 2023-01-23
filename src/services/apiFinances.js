import axios from "axios";

function createConfig(token){
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getEntries(token){
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/entries`, createConfig(token));
    return promise;
}

function newEntry (body, token){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/new-entry`, body, createConfig(token));
    return promise;
}

function deleteEntry (id, token){
    const promise = axios.delete(`${process.env.REACT_APP_API_URL}/entries/${id}`, createConfig(token));
    return promise;
}

function editEntry (id, body, token){
    const promise = axios.put(`${process.env.REACT_APP_API_URL}/entries/${id}`, body, createConfig(token));
    return promise;
}

const apiFinances = { getEntries, newEntry, deleteEntry, editEntry };
export default apiFinances;