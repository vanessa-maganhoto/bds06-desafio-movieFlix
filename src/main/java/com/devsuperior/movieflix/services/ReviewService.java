package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import com.devsuperior.movieflix.services.exceptions.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private AuthService authService;

    @PreAuthorize("hasAnyRole('MEMBER')")
    @Transactional
    public ReviewDTO saveReview(ReviewDTO reviewDTO){

    try{
        Review newReview = new Review();
        User user = authService.authenticated();
        newReview.setId(reviewDTO.getId());
        newReview.setText(reviewDTO.getText());
        newReview.setMovie(movieRepository.getOne(reviewDTO.getMovieId()));
        newReview.setUser(user);
        reviewRepository.save(newReview);
        return new ReviewDTO(newReview);
    } catch (RuntimeException e){
        throw new UnauthorizedException("Usuário não autorizado");
    }



    }
}
