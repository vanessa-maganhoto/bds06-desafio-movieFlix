package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Transactional(readOnly = true)
    @PreAuthorize("hasAnyRole('MEMBER','VISITOR')")
    public Page<MovieDTO> findAllPageMovieByGenre(Long genreId, Pageable pageable ){
        Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);

        Page<Movie> movies = movieRepository.findMovieByGenre(genre, pageable);
        return movies.map(x -> new MovieDTO(x));
    }

    @Transactional(readOnly = true)
    @PreAuthorize("hasAnyRole('MEMBER','VISITOR')")
    public MovieDTO findById(Long id){
        Optional<Movie> productObj = movieRepository.findById(id);
        Movie movie = productObj.orElseThrow(()-> new ResponseStatusException(NOT_FOUND));
        return new MovieDTO(movie);
    }

    @Transactional(readOnly = true)
    @PreAuthorize("hasAnyRole('MEMBER','VISITOR')")
    public List<ReviewDTO> findByReviewMovieId(Long idMovie){
        List<Review> reviews = reviewRepository.findByReviewMovieId(idMovie);
        return reviews.stream().map(x-> new ReviewDTO(x)).collect(Collectors.toList());

    }
}

