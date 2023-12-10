import {useEffect, useState} from "react";
import {SearchMovie} from "../Movie.ts";
import {getMovies, searchMovie} from "../config.ts";
import {Grid} from "@mui/material";
import MovieCard from "./MovieCard.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState<SearchMovie[]>([])
  const navigate = useNavigate()
  const searchProp = useLocation();
  const showMovies = () => {
    const searchOptions = searchMovie(searchProp.state.key)
    getMovies(searchOptions).then(r => setMovies(r))
  }

  useEffect(() => {
    showMovies()
  }, [movies])


  if (movies.length === 0) {
    navigate("/Notfound")
  } else {
    return (
      <>
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          {movies.map(movie => {
            return (
              <Grid key={movie.id} item xs={4}>
                <MovieCard title={movie.name} poster_path={movie.poster_path} overview={movie.overview}
                           voteAverage={0}/>
              </Grid>
            )
          })}
        </Grid>
      </>
    );
  }
};

export default Search;