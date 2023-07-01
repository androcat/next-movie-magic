import Link from "next/link";
import { useRouter } from "next/router";
// import { moviesGenres } from "../index";

export default function Page({ movies }) {
  //   console.log("mah props", movies.genres);
  // const [data, setData];

  const router = useRouter();
  console.log("rq: ", router.query);
  const genre = router.query.genre;

  return (
    <>
      <h1>Movies From Genre</h1>
      <ul>
        {movies.results.map((movie, index) => {
          return (
            <li key={index}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const genre = params.genre;

  const movies = await fetch(`http://localhost:3000/api/movies/genre`, {
    method: "POST",
    body: JSON.stringify({ genre }),
  });
  const moviesJson = await movies.json();
  console.log("MoviesJson:", moviesJson);
  return { props: { movies: moviesJson } };
}

// async function postData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

// postData("http://localhost:3000/api/movies/genre", { genre: 28 }).then(
//   (data) => {
//     console.log(data);
//   }
// );

// export async function getMovieGenres() {
//   const movies = await fetch("http://localhost:3000/api/movies");
//   const moviesJson = await movies.json();
//   console.log("MoviesGenres", moviesJson.genres);
//   return { props: { moviesGenres: moviesJson.genres } };
// }

export const getStaticPaths = async () => {
  // let moviesGenres = getMovieGenres();
  // let pathsContext = [];
  // console.log("moviesGenres", moviesGenres);
  // for (let genre in moviesGenres) {
  //   pathsContext.push({
  //     params: {
  //       genre: `${genre.name}`,
  //     },
  //   });
  // }

  // console.log("pathsContext", pathsContext);

  return {
    // paths: pathsContext,
    paths: [
      {
        params: {
          genre: "Action",
        },
      },
      {
        params: {
          genre: "Adventure",
        },
      },
      {
        params: {
          genre: "Animation",
        },
      },
      {
        params: {
          genre: "Comedy",
        },
      },
      {
        params: {
          genre: "Crime",
        },
      },
      {
        params: {
          genre: "Documentary",
        },
      },
      {
        params: {
          genre: "Drama",
        },
      },
      {
        params: {
          genre: "Family",
        },
      },
      {
        params: {
          genre: "Fantasy",
        },
      },
      {
        params: {
          genre: "History",
        },
      },
      {
        params: {
          genre: "Horror",
        },
      },
      {
        params: {
          genre: "Music",
        },
      },
      {
        params: {
          genre: "Mystery",
        },
      },
      {
        params: {
          genre: "Romance",
        },
      },
      {
        params: {
          genre: "Science Fiction",
        },
      },
      {
        params: {
          genre: "TV Movie",
        },
      },
      {
        params: {
          genre: "Thriller",
        },
      },
      {
        params: {
          genre: "War",
        },
      },
      {
        params: {
          genre: "Western",
        },
      },
    ],
    fallback: false,
  };
};

// export async function getStaticPaths() {

//     const res = await fetch('https://.../genres')
//     const genres = await res.json()

//     // Get the paths we want to prerender based on posts
//     // In production environments, prerender all pages
//     // (slower builds, but faster initial page load)
//     const paths = genres.map((genre) => ({
//       params: { id: genre.id },
//     }))

//     // { fallback: false } means other routes should 404
//     return { paths, fallback: false }
//   }
