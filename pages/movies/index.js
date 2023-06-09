import Link from "next/link";

export default function Page({ movies }) {
  console.log("mah props", movies.genres);
  return (
    <>
      <h1>Movies Genres</h1>
      <ul>
        {movies.genres.map((genre, index) => {
          return (
            <Link href={`/movies/list/${index}`}>
              <li>{genre.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const movies = await fetch("http://localhost:3002/api/movies/movie");
  const moviesJson = await movies.json();
  console.log("MoviesJson:", moviesJson);
  return { props: { movies: moviesJson } }; // https://} };
}
