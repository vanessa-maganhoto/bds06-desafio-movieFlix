import axios from "axios";
import Title from "components/Title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "types/movie";

import { BASE_URL } from "util/requests";



type UrlParams = {
    movieId: string;
}

const MovieDetails = () =>{
    
    const { movieId } = useParams<UrlParams>();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() =>{
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data)
            });
    }, [movieId]);

    return(

        <div>
            <Title text={`Tela de detalhes do filme id: ${movieId}`} />
            {/* Componente para inserir a avaliação */}
            <h1>{movie?.title}</h1>
            {/* <h2>{review?.user.name}</h2>
            <p>{review?.text}</p> */}
            
            {/* <MovieDetailsReview/> */}
        </div>
    );
}

export default MovieDetails;