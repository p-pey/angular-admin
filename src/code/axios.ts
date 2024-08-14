import Axios from 'axios';

Axios.interceptors.request.use((config)=> {
       return config;
});


Axios.interceptors.response.use((config)=> {
       return config;
});