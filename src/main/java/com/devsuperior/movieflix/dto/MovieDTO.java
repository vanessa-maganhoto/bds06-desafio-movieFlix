package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


public class MovieDTO implements Serializable {
    private static final long serialVersionUID= 1L;

    private Long id;
    private String title;
    private String subTitle;
    private String imgUrl;
    private String synopsis;
    private Integer year;

    private GenreDTO genre;

    public MovieDTO() {
    }

    public MovieDTO(Long id, String title, String subTitle, String imgUrl, String synopsis, Integer year, GenreDTO genre) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.imgUrl = imgUrl;
        this.synopsis = synopsis;
        this.year = year;
        this.genre = genre;
    }

    public MovieDTO(Long id) {
        this.id = id;
    }

    public MovieDTO(Movie movie){
        this.id = movie.getId();
        this.title = movie.getTitle();
        this.subTitle = movie.getSubTitle();
        this.imgUrl = movie.getImgUrl();
        this.synopsis = movie.getSynopsis();
        this.year = movie.getYear();
        this.genre = new GenreDTO(movie.getGenre());
    }

    public Movie toEntity(){
        return new Movie(
                this.title,
                this.subTitle,
                this.imgUrl,
                this.synopsis,
                this.year,
                this.genre == null ? null : this.genre.toEntity());
    }

    public void getMovieId(Long id){
         this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public GenreDTO getGenre() {
        return genre;
    }

    public void setGenre(GenreDTO genre) {
        this.genre = genre;
    }

//    public List<ReviewDTO> getReviews() {
//        return reviews;
//    }


}

