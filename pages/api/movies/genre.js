const key = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

export default async function handler(request, response) {
  console.log("AH A request BODY !!!!", request.body);
  const genre = request.body.genre;
  const movies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}&api_key=${key}`
  );
  const moviesJson = await movies.json();
  console.log("movies by genre Json !!!!:", moviesJson);

  response.status(200).json(moviesJson);
}
