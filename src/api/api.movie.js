import axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use((req) => {
  req.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzcyMzFiNDhiMmY4ODVjMDgyNmZmYjFhMDk3Yjc0MCIsInN1YiI6IjVkNzhiNTJiMzk1NDlhMDAxMDk3YzdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhUjygI9QeGNcGfdauDksNe7Xjvl1SjXj7fCVWgM_IU";
  return req;
});

const apiMovieMap = (m) => ({
  img: "https://image.tmdb.org/t/p/w500" + m.poster_path,
  title: m.title,
  details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
  description: m.overview,
  note: m.vote_average / 2,
});

export const getMovies = async (page, query) => {
  try {
    const response = await apiMovie.get(
      `/${query ? "search" : "discover"}/movie?${
        query ? `query=${query}&` : ""
      }language=fr-FR&page=` + page
    );
    return {
      values: response.data.results.map(apiMovieMap),
      total_pages: response.data.total_pages,
    };
  } catch (error) {}
};

export const getMovies2 = async (setState, page, query) => {
  try {
    const response = await apiMovie.get(
      `/${query ? "search" : "discover"}/movie?${
        query ? `query=${query}&` : ""
      }language=fr-FR&page=` + page
    );

    setState((state) => ({
      values: [...state.values, ...response.data.results.map(apiMovieMap)],
      hasMore: page < response.data.total_pages,
      error: false,
    }));
  } catch (error) {
    setState({ values: [], error: error.message });
  }
};

export const wrapPromise = (page, query) => {
  let status = "pending";
  let result;
  let suspender = getMovies(page, query).then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

// export function wrapPromise(page) {
//   let status = "pending";
//   let result;
//   let suspender = getMovies(page).then(
//     (r) => {
//       status = "success";
//       result = r;
//     },
//     (e) => {
//       status = "error";
//       result = e;
//     }
//   );
//   return {
//     read() {
//       if (status === "pending") {
//         throw suspender;
//       } else if (status === "error") {
//         throw result;
//       } else if (status === "success") {
//         return result;
//       }
//     },
//   };
// }
