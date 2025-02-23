import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Person, pImages } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  person: Person | null = null;
  pImages: pImages | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private pSrv: PersonService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ pid }) => {
      this.getPersonDetails(pid);
      this.getPersonMovieCredits(pid);
    });
  }

  getPersonDetails(id: string) {
    this.pSrv.getPerson(id).subscribe((res) => {
      this.person = res;
    });
  }

  getPersonMovieCredits(id: string) {
    this.pSrv.pImages(id).subscribe((pMvCrdt) => {
      this.pImages = pMvCrdt;
    });
  }
}
