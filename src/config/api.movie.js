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

// export const getMovies = async () => {
//   try {
//     const response = await apiMovie.get("/discover/movie?language=fr-FR");
//     return response.data.results.map(apiMovieMap);
//   } catch (error) {}
// };

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
