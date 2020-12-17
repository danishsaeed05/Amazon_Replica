import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/replica-1b54d/us-central1/api'
})

export default instance;