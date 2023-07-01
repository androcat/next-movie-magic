import Link from "next/link";

export default function Page({ moviesGenres }) {
  console.log("mah props", moviesGenres);
  return (
    <>
      <h1>Movies Genres</h1>
      <ul>
        {moviesGenres.map((genre, index) => {
          return (
            <li key={index}>
              <Link href={`/movies/list/${genre.name}`}>{genre.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const movies = await fetch("http://localhost:3000/api/movies");
  const moviesJson = await movies.json();
  console.log("MoviesGenres", moviesJson.genres);
  return { props: { moviesGenres: moviesJson.genres } };
}
