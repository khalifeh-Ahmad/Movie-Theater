import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private gsrv: MoviesService) {}

  ngOnInit(): void {
    this.gsrv.getMoviesGenres().subscribe((res) => {
      this.genres = res;
      this.genres.forEach((gen) => {
        this.gsrv.fetchGenreImage(gen);
      });
    });
  }
}
