import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TvShow, TvShowDto, TvShowImages } from '../models/tvshow';
import { MovieCredits } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'popular', count: number = 12) {
    return this.http
      .get<TvShowDto>(
        `${environment.baseUrl}/tv/${type}?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getTvShow(id: string) {
    return this.http.get<TvShow>(
      `${environment.baseUrl}/tv/${id}?api_key=${environment.apiKey}`
    );
  }

  getTvShowImages(id: string) {
    return this.http.get<TvShowImages>(
      `${environment.baseUrl}/tv/${id}/images?api_key=${environment.apiKey}`
    );
  }

  getTvShowCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${environment.baseUrl}/tv/${id}/credits?api_key=${environment.apiKey}`
    );
  }
  searchTvShows(page: number, keyword?: string) {
    const uri = keyword ? '/search/tv' : '/tv/popular';

    return this.http
      .get<TvShowDto>(
        `${environment.baseUrl}${uri}?page=${page}&query=${keyword}&api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
