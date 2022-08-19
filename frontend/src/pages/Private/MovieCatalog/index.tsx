import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Review } from 'types/review';
import MovieDetails from '../MovieDetails';
import Title from 'components/Title';
import axios from 'axios';
import { BASE_URL } from 'util/requests';

// type Props = {
//     review: Review
// };

const MovieCatalog = () => {
  const [review, setReview] = useState<Review>();

  useEffect(() => {
    axios.get(BASE_URL + '/movies/1').then((response) => {
      setReview(response.data);
    });
  }, []);

  return (
    <>
      <Title text="Tela de listagem de filmes" />
      <div>
        {/* <Link to={`/movies/${review?.movieId}`}>
          <MovieCard movie={movie} />
        </Link> */}
      </div>
    </>
  );
};

export default MovieCatalog;
