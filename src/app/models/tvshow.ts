import { Movie } from './movie';

export interface TvShow extends Movie {
  name: string;
  first_air_date: string;
  origin_country: string;
  number_of_episodes: number;
  spoken_languages: Lang[];
  production_countries: ProdCountry[];
  seasons: number[];
}

export interface TvShowDto {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface Lang {
  english_name: string;
  name: string;
  iso_639_1: string;
}
export interface ProdCountry {
  name: string;
  iso_3166_1: string;
}

export interface TvShowImages {
  backdrops: {
    file_path: string;
  }[];
}
