const key = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

export default async function handler(request, response) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
  );
  const moviesJson = await movies.json();
  console.log("moviesJson !!!!:", moviesJson);

  response.status(200).json(moviesJson);
}
