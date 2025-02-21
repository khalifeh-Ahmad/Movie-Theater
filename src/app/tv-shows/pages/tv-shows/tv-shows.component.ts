import { Component, OnInit } from '@angular/core';
import { TvShow } from 'src/app/models/tvshow';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

tvshows: TvShow[] = [];
  searchValue: string | null = null;

  constructor(private srv: TvshowsService) {}

  ngOnInit(): void {
    this.getPagedTvShows(1);
  }

  getPagedTvShows(page: number, keyword?: string) {
    this.srv.searchTvShows(page, keyword).subscribe((res) => {
      this.tvshows = res;
    });
  }
  paginate(event: any) {
    const pageNum = event.page + 1;

    if (this.searchValue) {
      this.getPagedTvShows(pageNum, this.searchValue);
    } else {
      this.getPagedTvShows(pageNum);
    }
  }

  srchInput(keyword: string) {
    if (keyword) {
      this.getPagedTvShows(1, keyword);
    }
  }

}
