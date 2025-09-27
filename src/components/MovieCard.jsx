import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      // console.log(resp.data.results)
      setMovieList(res.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
  {movieList.length > 0 && (
    <IoChevronBackOutline
      onClick={() => slideLeft(elementRef.current)}
      className={`text-[50px] text-white
        p-2 z-10 cursor-pointer hidden md:block absolute
        ${index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"} `}
    />
  )}

  <div
    ref={elementRef}
    className="flex overflow-x-auto gap-8
    scrollbar-hide scroll-smooth pt-4 px-3 pb-4"
  >
    {movieList.map((item, index) =>
      index_ % 3 === 0 ? (
        <HrMovieCard key={item.id || index} movie={item} />
      ) : (
        <MovieCard key={item.id || index} movie={item} />
      )
    )}
  </div>

  {movieList.length > 0 && (
    <IoChevronForwardOutline
      onClick={() => slideRight(elementRef.current)}
      className={`text-[50px] text-white hidden md:block
        p-2 cursor-pointer z-10 top-0 absolute right-0 
        ${index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"}`}
    />
  )}
</div>

  );
}

export default MovieList;
