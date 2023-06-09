export default function Page(props) {
  console.log("mah props", props.genres);
  return (
    <>
      <h1>Movies</h1>
    </>
  );
}

export async function getStaticProps() {
  const movies = await fetch("http://localhost:3002/api/movies/movie");
  const moviesJson = await movies.json();
  console.log("MoviesJson:", moviesJson);
  return { props: { movies: moviesJson } }; // https://} };
}
