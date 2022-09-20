import { Movie } from 'types/movie';

import './styles.css';

type Props = {
  movie: Movie;
};
const MovieCard = ({ movie }: Props) => {
  
  return (
    <div>
        
      <div>
          <img src={movie.imgUrl} alt={movie.title} />
          <h2>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
