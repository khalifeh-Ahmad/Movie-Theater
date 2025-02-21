import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TvShowComponent, TvShowsComponent],
  imports: [
    CommonModule,
    TvShowsRoutingModule,
    CarouselModule,
    TabViewModule,
    ImageModule,
    PaginatorModule,
    SharedModule,
  ],
  exports: [TvShowsComponent],
})
export class TvShowsModule {}
