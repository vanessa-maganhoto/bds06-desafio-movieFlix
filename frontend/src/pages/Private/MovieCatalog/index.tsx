import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from 'util/requests';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import MovieCard from 'components/MovieCard';

import './styles.css';
import GenreFilter, { GenreFilterData } from 'components/GenreFilter';
import { Genre } from 'types/genre';


type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
}

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
    {
      activePage:0, 
      filterData: {name: null}
    }
  );

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

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({activePage: 0, filterData: data});
  }

  return (
    <>
      <div className="catalog-container">
        <div>
          <GenreFilter onSubmitFilter={handleSubmitFilter}/>
        </div>
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