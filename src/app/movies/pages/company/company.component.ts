import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Company, CompanyImages } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  company: Company | null = null;
  cImages: CompanyImages | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private rout: ActivatedRoute, private cSrv: MoviesService) {}

  ngOnInit(): void {
    this.rout.params.pipe(first()).subscribe(({ cid }) => {
      this.getCompanyDetails(cid);
      this.getCompanyImages(cid);
    });
  }

  getCompanyDetails(id: string) {
    this.cSrv.getCompany(id).subscribe((res) => {
      this.company = res;
    });
  }

  getCompanyImages(id: string) {
    this.cSrv.companyImages(id).subscribe((cImg) => {
      this.cImages = cImg;
    });
  }
}
