import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TvShow } from 'src/app/models/tvshow';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upComingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTvShows: TvShow[] = [];
  constructor(private movSrv: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies('popular');
    this.loadMovies('upcoming', 6);
    this.loadMovies('top_rated', 12);
  }

  loadMovies(type: string, num?: number) {
    this.movSrv.getMovies(type, num).subscribe({
      next: (res) => {
        switch (type) {
          case 'popular':
            this.popularMovies = res;
            break;
          case 'upcoming':
            this.upComingMovies = res;
            break;
          case 'top_rated':
            this.topRatedMovies = res;

            break;
        }
      },
      error: (err) => {
        console.error(`Error fetching ${type} movies:`, err);
      },
    });
  }
}
