import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonComponent } from './pages/person/person.component';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [PersonsComponent, PersonComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    PaginatorModule,
    CarouselModule,
    ImageModule,
    SharedModule,
  ],
})
export class PersonsModule {}
