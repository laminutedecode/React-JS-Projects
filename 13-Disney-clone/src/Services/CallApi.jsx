import axios from "axios";


const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = ''

// https://api.themoviedb.org/3/trending/all/day?api_key=0c9a6f18917ec1bb52e881f5a3ca8db0


const getVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=';

const getMovieById=(id)=>
    axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)

export default {getVideos, getMovieById};