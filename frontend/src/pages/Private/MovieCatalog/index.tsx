
import { useState, useEffect } from 'react';

import Title from 'components/Title';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from 'util/requests';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails';


const MovieCatalog = () => {



  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const getMovie: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
    }

    requestBackend(getMovie)
      .then(response =>{
        setMovie(response.data)
      })
    },[]);

  return (

    
    <>
      <Title text="Tela de listagem de filmes" />
      <div>
        <ul>
          <li><Link to="/movies/1">Acessar /movies/1</Link></li>
          <li><Link to="/movies/2">Acessar /movies/2</Link></li>
        </ul>
        
      </div>
    </>
  );
};

export default MovieCatalog;

