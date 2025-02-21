import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person, PersonDto, pImages } from '../models/person';
import { map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpReq: HttpClient) {}

  getPopularCelebrities() {
    return this.httpReq
      .get<PersonDto>(
        `${environment.baseUrl}/person/popular?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 20));
        })
      );
  }

  searchPersons(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/person' : '/person/popular';
    return this.httpReq
      .get<PersonDto>(
        `${environment.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getPerson(id: string) {
    return this.httpReq.get<Person>(
      `${environment.baseUrl}/person/${id}?api_key=${environment.apiKey}`
    );
  }

  pImages(id: string): Observable<pImages> {
    return this.httpReq
      .get<pImages>(
        `${environment.baseUrl}/person/${id}/images?api_key=${environment.apiKey}`
      )
      .pipe(switchMap((res) => of({ profiles: res.profiles.slice(0, 12) })));
  }
}
