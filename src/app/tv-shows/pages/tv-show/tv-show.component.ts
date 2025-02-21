import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MovieCredits } from 'src/app/models/movie';
import { TvShow, TvShowImages } from 'src/app/models/tvshow';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit , OnDestroy {
  tShow: TvShow | null = null;
  tvShowImages: TvShowImages | null = null;
  tvCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private tsrv: TvshowsService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ tid }) => {
      this.getTvShowDetails(tid);
      this.getTvShowImages(tid);
      this.getTvShowCredits(tid);
    });
  }

  ngOnDestroy(): void {
    console.log('show component destroyed');
  }

  getTvShowDetails(id: string) {
    this.tsrv.getTvShow(id).subscribe((res) => {
      this.tShow = res;
      console.log(res);
    });
  }

  getTvShowImages(id: string) {
    this.tsrv.getTvShowImages(id).subscribe((tImg) => {
      this.tvShowImages = tImg;
    });
  }

  getTvShowCredits(id: string) {
    this.tsrv.getTvShowCredits(id).subscribe((tvCrdt) => {
      this.tvCredits = tvCrdt;
    });
  }
}
