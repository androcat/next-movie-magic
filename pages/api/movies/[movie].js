const key = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

export default async function handler(request, response) {
  console.log("AH A request BODY !!!!", request.body);
  const id = request.query.movie;
  console.log("my id", id);
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
  );
  const moviesJson = await movies.json();
  console.log("movie by id Json !!!!:", moviesJson);

  response.status(200).json(moviesJson);
}
