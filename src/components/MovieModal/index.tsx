import React, { useRef } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface IMovieModalProps {
  id : string;
  name : string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  setModalOpen : (open: boolean) => void;
}

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
} : IMovieModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // use onClickOutside 함수를 불러와서 모달 창 밖을 클릭시 모달 창이 나가게 구현
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title"> {title ? title : name} </h2>
            <p className="modal_overview">평점: {vote_average}</p>
            <p className="modal_overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
