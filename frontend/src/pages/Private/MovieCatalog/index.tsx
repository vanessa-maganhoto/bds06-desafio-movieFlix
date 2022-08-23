import { useState, useEffect } from 'react';
import Title from 'components/Title';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';

import './styles.css';

const MovieCatalog = () => {

  const [,setMovie] = useState<Movie>();

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
      <Title text="Tela listagem de filmes" />
      <div className="catalog-container">
        <div className="catalog-list">
          <p className="catalog-list-item"><Link to="/movies/1">Acessar /movies/1</Link></p>
          <p className="catalog-list-item"><Link to="/movies/2">Acessar /movies/2</Link></p>
        </div>
        
      </div>
    </>
  );
};

export default MovieCatalog;

