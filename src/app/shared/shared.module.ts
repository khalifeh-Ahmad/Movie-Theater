import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { VideoEmbedComponent } from './video-embed/video-embed.component';
import { ItemComponent } from './item/item.component';
import { ItemsBannerComponent } from './items-banner/items-banner.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    VideoEmbedComponent,
    ItemComponent,
    ItemsBannerComponent,
    SliderComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, FormsModule],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    VideoEmbedComponent,
    ItemComponent,
    ItemsBannerComponent,
    SliderComponent,
  ],
})
export class SharedModule {}
