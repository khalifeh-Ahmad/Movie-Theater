import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Company,
  CompanyImages,
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieVideoDto,
} from '../models/movie';
import { map, Observable, of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'popular', count: number = 12) {
    return this.http
      .get<MovieDto>(
        `${environment.baseUrl}/movie/${type}?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getMovieVideos(mid: string) {
    return this.http
      .get<MovieVideoDto>(
        `${environment.baseUrl}/movie/${mid}/videos?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 6));
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${environment.baseUrl}/movie/${id}/images?api_key=${environment.apiKey}`
    );
  }
  getMoviesGenres() {
    return this.http
      .get<GenresDto>(
        `${environment.baseUrl}/genre/movie/list?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  fetchGenreImage(genre: any) {
    this.http
      .get(
        `${environment.baseUrl}/discover/movie?api_key=${environment.apiKey}&with_genres=${genre.id}`
      )
      .subscribe((response: any) => {
        if (response.results.length > 0) {
          genre.image = `https://image.tmdb.org/t/p/w500${response.results[0].backdrop_path}`;
        } else {
          genre.image = 'assets/images/genres/default.jpg'; // Fallback image
        }
      });
  }

  getMoviesByGenre(genId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${environment.baseUrl}/discover/movie?with_genres=${genId}&page=${pageNumber}&api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieCredits(id: string): Observable<MovieCredits> {
    return this.http
      .get<MovieCredits>(
        `${environment.baseUrl}/movie/${id}/credits?api_key=${environment.apiKey}`
      )
      .pipe(
        map((res) => ({
          ...res,
          cast: res.cast.slice(0, 25),
          crew: res.crew.slice(0, 20),
        }))
      );
    //.pipe(switchMap(res => of({ cast: res.cast.slice(0, 10) })));
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDto>(
        `${environment.baseUrl}/movie/${id}/similar?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 12));
        })
      );
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(
        `${environment.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getCompany(id: string) {
    return this.http.get<Company>(
      `${environment.baseUrl}/company/${id}?api_key=${environment.apiKey}`
    );
  }
  companyImages(id: string): Observable<CompanyImages> {
    return this.http
      .get<CompanyImages>(
        `${environment.baseUrl}/company/${id}/images?api_key=${environment.apiKey}`
      )
      .pipe(switchMap((res) => of({ logos: res.logos.slice(0, 12) })));
  }
}
