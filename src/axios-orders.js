import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://first-react-project-88d5a.firebaseio.com/'
});


export default instance;