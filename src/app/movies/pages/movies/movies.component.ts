import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  gID: string | null = null;
  searchValue: string | null = null;
  constructor(private srv: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genId }) => {
      if (genId) {
        this.gID = genId;
        this.getMoviesByGenre(genId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number, searchKeyword?: string) {
    this.srv.searchMovies(page, searchKeyword).subscribe((res) => {
      this.movies = res;
    });
  }

  getMoviesByGenre(genId: string, page: number) {
    this.srv.getMoviesByGenre(genId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    const pageNum = event.page + 1;
    if (this.gID) {
      this.getMoviesByGenre(this.gID, pageNum);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(pageNum, this.searchValue);
      } else {
        this.getPagedMovies(pageNum);
      }
    }
  }

  srchInput(keyword: string) {
    if (keyword) {
      this.getPagedMovies(1, keyword);
    }
  }
}
