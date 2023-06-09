const key = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

// Make an async await
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
