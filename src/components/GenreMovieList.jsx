import React, { useEffect, useState } from "react";
import GenresList from "../Constant/GenresList.jsx";
import GlobalApi from "../services/GlobalApi";
import MovieList from "./MovieList";

function GenreMovieList() {
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    // We only fetch the first 5 genres from the newly ordered list.
    GenresList.genre.slice(0, 5).forEach((item) => { 
      GlobalApi.getMovieByGenreId(item.id).then((res) => {
        setMoviesByGenre((prev) => ({
          ...prev,
          [item.id]: res.data.results,
        }));
      });
    });
  }, []);

  return (
    <div>
      {/* Map over the first 5 genres and only render if data has arrived */}
      {GenresList.genre.slice(0, 5).map(
        (item, index) =>
          moviesByGenre[item.id]?.length > 0 && ( // 👈 Only render if movies exist
            <div key={item.id} className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList
                movieList={moviesByGenre[item.id]}
                index_={index}
              />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;