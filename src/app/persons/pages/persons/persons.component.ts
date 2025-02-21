import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];
  searchValue: string | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private pSrv: PersonService) {}

  ngOnInit(): void {
    this.getPagedPersons(1);
  }

  getPagedPersons(page: number, keyword?: string) {
    this.pSrv.searchPersons(page, keyword).subscribe((res) => {
      this.persons = res;
    });
  }
  srchInput(keyword: string) {
    if (keyword) {
      this.getPagedPersons(1, keyword);
    }
  }
  paginate(event: any) {
    const pageNum = event.page + 1;
    if (this.searchValue) {
      this.getPagedPersons(pageNum, this.searchValue);
    } else {
      this.getPagedPersons(pageNum);
    }
  }
}
