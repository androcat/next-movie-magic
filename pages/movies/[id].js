import Link from "next/link";

export default function Page({ movies }) {
  console.log("mah props", movies);
  return (
    <>
      <h1>{movies.original_title}</h1>
      <h2>{movies.tagline}</h2>
      <p>{movies.overview}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log("my context", context);
  const movies = await fetch(`http://localhost:3000/api/movies/${id}`);
  const moviesJson = await movies.json();
  console.log("MoviesJson", moviesJson);
  return { props: { movies: moviesJson } };
}
