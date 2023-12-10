import axios from "axios";


export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_API_KEY
  }
};



export const searchMovie = (movieName: string) => {
  return  {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/collection?query=${movieName}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_API_KEY
    }
  };
}



export const getMovies = async (authorization:{}) => {
  try {
    const response = await axios.request(authorization);
    return response.data.results
  } catch (error) {
    console.error(error);
  }
}



