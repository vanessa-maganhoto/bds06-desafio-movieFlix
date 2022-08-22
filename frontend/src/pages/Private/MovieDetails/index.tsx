import { AxiosRequestConfig } from 'axios';
import ReviewCard from 'components/ReviewCard';
import ReviewForm from 'components/ReviewForm';
import Title from 'components/Title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const copyReview = [...reviews];
    copyReview.push(review);
    setReviews(copyReview);
  };

  return (
    <div>
      <Title text={`Tela de detalhes do filme id: ${movieId}`} />

      {hasAnyRole(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}
      <ReviewCard review={reviews} />
    </div>
  );
};

export default MovieDetails;
