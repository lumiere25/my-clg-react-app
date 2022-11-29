function MovieListItem(props) {
  return (
    <div>
    {
      props.movieData.isNew && (<h1>New</h1>)
    }
   
          <h3>
            {props.movieData.title} was released in {props.movieData.yearReleased}
          </h3>

          <p>
           I have watched it {props.movieData.watchedCount} times.
          </p>
        </div>
  )
}

export default MovieListItem;