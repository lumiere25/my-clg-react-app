import movieData from "../../data/movies.json";
import MovieListItem from "../Movie";

function MovieList() {
  return (
    movieData.movies.map((movie) => {
      return (
       <MovieListItem movieData={movie}/>
      )
    })
  )
}

export default MovieList;