
import { useState, useEffect } from 'react';

import Title from 'components/Title';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import { Movie } from 'types/movie';


const MovieCatalog = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(BASE_URL + '/movies/1').then((response) => {
      setMovie(response.data);
    });
  }, []);

  return (
    <>
      <Title text="Tela de listagem de filmes" />
      <div>
        <h2>{movie?.title}</h2>
      </div>
    </>
  );
};

export default MovieCatalog;
