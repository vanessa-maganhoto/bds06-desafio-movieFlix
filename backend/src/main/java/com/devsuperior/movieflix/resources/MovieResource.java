package com.devsuperior.movieflix.resources;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieResource {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<Page<MovieDTO>> findAllPageMovieByGenre(
            @RequestParam(value = "genreId", defaultValue = "0") Long genreId,
            Pageable pageable) {
        //Parâmetros: page, size, sort
        Page<MovieDTO> listMovies = movieService.findAllPageMovieByGenre(genreId, pageable);
        return ResponseEntity.ok().body(listMovies);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MovieDTO> findById(@PathVariable Long id){
        MovieDTO movieDTO = movieService.findById(id);
        return ResponseEntity.ok().body(movieDTO);
    }

    @GetMapping(value = "/{idMovie}/reviews")
    public ResponseEntity<List<ReviewDTO>> findByReviewMovieId(@PathVariable Long idMovie){
        List<ReviewDTO> reviewDTO = movieService.findByReviewMovieId(idMovie);
        return ResponseEntity.ok().body(reviewDTO);
    }

}
