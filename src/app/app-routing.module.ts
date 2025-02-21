import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './movies/pages/genres/genres.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./persons/persons.module').then((m) => m.PersonsModule),
  },
  { path: 'genres', component: GenresComponent },
  // { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
