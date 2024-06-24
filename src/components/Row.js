import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import axios from '../api/axios'
import "./Row.css";
import MovieModal from './MovieModal';

function Row( {title, id, fetchUrl} ) {

    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

  // fetchMovieData가 변경시에 즉 새로 생성되는 경우는 fetchUrl이 변경될 때 새로 생성

    const fetchMovieData = useCallback( async () => {
        const response = await axios.get(fetchUrl);
        console.log(response);
        setMovies(response.data.results);
        
    }, [fetchUrl])


  // 다시 호출
    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData])

    const handleClick = (movie) => {
      setModalOpen(true);
      setMovieSelected(movie);
    };



    return (
      
        <div>
        <h2>{title}</h2>
        <div className ="slider">
            <div className ="slider__arrow-left">
                <span className ="arrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft -= window.innerWidth -80
                }}>
                    {"<"}
                </span>  
            </div>

            <div id={id} className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className='row__poster'
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            
            <div className ="slider__arrow-right">
                <span className ="arrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft += window.innerWidth -80
                }}>
                    {">"}
                </span>  
            </div>

        </div>
        
        {modalOpen && 
          <MovieModal
            {...movieSelected}
            setModalOpen = {setModalOpen}
          />
        }

        </div>
    )
    }

export default Row