import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ movieList, index_ }) {
  const elementRef = useRef(null);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  // If the movie list is empty, don't render the component at all.
  if (!movieList || movieList.length === 0) return null;

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
          p-2 z-10 cursor-pointer hidden md:block absolute left-0 top-1/2 -translate-y-1/2
          ${index_ % 3 === 0 ? "mt-[-20px]" : "mt-[10px]"}`} // Adjusted mt for better centering
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item, index) =>
          index_ % 3 === 0 ? (
            <HrMovieCard key={item.id || index} movie={item} />
          ) : (
            <MovieCard key={item.id || index} movie={item} />
          )
        )}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
          p-2 cursor-pointer z-10 absolute right-0 top-1/2 -translate-y-1/2 
          ${index_ % 3 === 0 ? "mt-[-20px]" : "mt-[10px]"}`} // Adjusted mt for better centering
      />
    </div>
  );
}

export default MovieList;