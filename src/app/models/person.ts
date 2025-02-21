export interface PersonDto {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

export interface Person {
  adult: boolean;
  name: string;
  original_name: string;
  gender: number;
  known_for_department: string;
  id: number;
  popularity: number;
  profile_path: string;
  known_for: KnownFor[];
  birthday: string;
  deathday: string;
  place_of_birth: string;
  also_known_as: string[];
  biography: string;
}

export interface KnownFor {
  backdrop_path: string;
  id: number;
  name?: string;
  original_name?: string;
  original_title?: string;
  overview: string;
  media_type: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
}

export interface pImages {
  profiles: {
    file_path: string;
  }[];
}
