import { AxiosRequestConfig } from 'axios';
import ReviewCard from 'components/ReviewCard';
import ReviewForm from 'components/ReviewForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { hasAnyRole } from 'util/auth';
import { BASE_URL, requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [movies, setMovies] = useState<Movie>();

  useEffect(() => {
    const getReviews: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
      baseURL: BASE_URL,
    };

    requestBackend(getReviews).then((response) => {
      setReviews(response.data);
    });
  }, [movieId, reviews.length]);

  useEffect(() => {
    const getMovies: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/`,
      withCredentials: true,
      baseURL: BASE_URL,
    };
    requestBackend(getMovies).then((response) => {
      setMovies(response.data);
      console.log('movies', response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const copyReview = [...reviews];
    copyReview.push(review);
    setReviews(copyReview);
  };

  return (
    <div className="movie-details-container">
      {
        <div className="movie-details-card">
          <div className="movie-details-img">
            <img src={movies?.imgUrl} alt={movies?.title} />
          </div>

          <div className="movie-details-info">
            <h2>{movies?.title}</h2>
            <h3>{movies?.year}</h3>
            <p>{movies?.subTitle}</p>
            <div className="movie-details-info-p">
              <p>{movies?.synopsis}</p>
            </div>
          </div>
        </div>
      }
      {hasAnyRole(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      {reviews.length === 0 ? ' ' : <ReviewCard review={reviews} />}
    </div>
  );
};

export default MovieDetails;
