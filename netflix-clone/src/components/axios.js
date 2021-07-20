import axios from 'axios';

/** base url to make request to the themoviedatabase */
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

export default instance;