import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from 'util/requests';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import MovieCard from 'components/MovieCard';

import './styles.css';

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();

  // const getMovies = (pageNumber: number) => {
  //   const config: AxiosRequestConfig = {
  //     method: 'GET',
  //     url: '/movies',
  //     params: {
  //       page: pageNumber,
  //       size: 4,
  //     },
  //   };

  //   requestBackend(config).then((response) => {
  //     setPage(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getMovies(0);
  // }, []);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 4,
      },
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <>
      <div className="catalog-container">
        {/* COMPONENTE DA BARRA DE PESQUISA */}
        <div className="catalog-list">
          {page?.content.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}/reviews`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;