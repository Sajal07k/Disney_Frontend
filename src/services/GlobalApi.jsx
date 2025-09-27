import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = `af65f1cd5665c7aafb9011845e021f43`

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export default { getTrendingVideos }