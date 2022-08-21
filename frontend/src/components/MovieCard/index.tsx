import { Movie } from 'types/movie';
import './styles.css';

type Props ={
    movie: Movie;
}
const MovieCard = ({ movie } : Props) => {
    return(
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.imgUrl} alt ={movie.title}/>
        </div>
    );
}

export default MovieCard;