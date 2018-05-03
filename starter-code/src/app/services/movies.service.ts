import { Injectable } from '@angular/core';
import { movies } from '../data/sample-movies';

@Injectable()
export class MoviesService {
  movies: Array<any> = [];

  constructor() {
    this.movies = movies;
   }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.find((elem) => {
      return elem.id === Number(id);
    });
  }
}
