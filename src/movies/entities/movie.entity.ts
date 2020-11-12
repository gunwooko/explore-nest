// If we use real DB, we have to create Model.

// Here we define a structure of MovieData
export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[]; // This means an array of strings
}
