import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional() // Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.
  @IsString({ each: true })
  readonly genres: string[];
}
