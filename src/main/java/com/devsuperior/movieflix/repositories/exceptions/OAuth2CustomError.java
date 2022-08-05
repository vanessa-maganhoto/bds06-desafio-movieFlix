package com.devsuperior.movieflix.repositories.exceptions;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class OAuth2CustomError implements Serializable {
    private static final long serialVersionUID = 1L;

    private String error;
    @JsonProperty("error_description")
    private String errorDescription;

    public OAuth2CustomError() {
    }

    public OAuth2CustomError(String error, String errorDescription) {
        this.error = error;
        this.errorDescription = errorDescription;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getErrorDescription() {
        return errorDescription;
    }

    public void setErrorDescription(String errorDescription) {
        this.errorDescription = errorDescription;
    }
}
