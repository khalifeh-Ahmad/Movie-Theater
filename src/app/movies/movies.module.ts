import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';
import { CompanyComponent } from './pages/company/company.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent, GenresComponent, CompanyComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    SharedModule,
    PaginatorModule,
    CarouselModule,
    TabViewModule,
    ImageModule,
    HomeModule,
  ],
})
export class MoviesModule {}
