import axios from 'axios';

export default axios.create({
    baseUrl: process.env.REACT_APP_DOMAIN
})