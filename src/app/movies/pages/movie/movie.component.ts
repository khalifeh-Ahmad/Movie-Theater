import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit,OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;
  similarMovies: Movie[] = [];
  constructor(private route: ActivatedRoute, private srv: MoviesService) { }

    ngOnInit(): void {
      this.route.params.pipe(first()).subscribe(({ mid }) => {
      
        this.getMovieDetails(mid);
        this.getMovieVideo(mid);
        this.getMovieImages(mid);
        this.getMovieCredits(mid);
        this.getMovieSimilar(mid);
      });
    }
    ngOnDestroy(): void {
      console.log('component destroyed');
    }
    getMovieDetails(id: string) {
      this.srv.getMovie(id).subscribe((res) => {
        this.movie = res;
      });
    }
  
    getMovieVideo(id: string) {
      this.srv.getMovieVideos(id).subscribe((mvs) => {
        this.movieVideos = mvs;
      });
    }
    getMovieImages(id: string) {
      this.srv.getMovieImages(id).subscribe((mvImg) => {
        this.movieImages = mvImg;
      });
    }
    getMovieCredits(id: string) {
      this.srv.getMovieCredits(id).subscribe((mvCrdt) => {
        this.movieCredits = mvCrdt;
      });
    }
  
    getMovieSimilar(id: string) {
      this.srv.getMovieSimilar(id).subscribe((mvSmlr) => {
        this.similarMovies = mvSmlr;
      });
    }

}
