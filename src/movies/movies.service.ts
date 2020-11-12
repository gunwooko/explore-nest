import { Injectable } from '@nestjs/common';

import { Movie } from './entities/movie.entity';

@Injectable() // The @Injectable() decorator attaches metadata, which tells Nest that this class is a Nest provider.
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id)); // Also you can use movie.id === +id => this convert String to Number
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
