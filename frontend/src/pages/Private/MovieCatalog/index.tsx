import { useState, useEffect, useCallback } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from 'util/requests';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import MovieCard from 'components/MovieCard';
import GenreFilter, { GenreFilterData } from 'components/GenreFilter';
import Pagination from 'components/Pagination';

import './styles.css';

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

  
  const handlePageChange = (pageNumber: number) =>{
    setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData});
  }

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      baseURL: BASE_URL,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        name: controlComponentsData.filterData.name,
        genreId: controlComponentsData.filterData.name?.id
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  } , [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

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
        <Pagination 
        forcePage={page?.number}
        pageCount={(page) ? page.totalPages : 0 } 
        range={3}
        onChange={handlePageChange}
      />
      </div>
    </>
  );
};

export default MovieCatalog;