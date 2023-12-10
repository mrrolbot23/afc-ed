import MovieCard from "./MovieCard.tsx";
import {Grid} from "@mui/material";
// import axios from "axios";
import {getMovies, options} from "../config.ts";
import {useEffect, useState} from "react";
import {Movie} from "../Movie.ts";

const Results = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  const showMovies = () => {
    getMovies(options).then(r => setMovies(r))
  }

  useEffect(() => {
    showMovies()
  }, [movies])

  return (
    <>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {movies.map(movie => {
          return (
            <Grid key={movie.id} item xs={4}>
              <MovieCard  title={movie.title} poster_path={movie.poster_path} overview={movie.overview}
                         voteAverage={movie.vote_average}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  );
};

export default Results;