import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styles: [],
})
export class SearchResultComponent implements OnInit {
  public results: any;
  public searchQuery: string = '';
  public searchString: string | undefined;

  public subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _musicDataService: MusicDataService
  ) {
    // this.route.queryParams.subscribe((data: Params) => console.log(data));
    this.route.queryParams.subscribe(
      (data) => (
        (this.searchQuery = data['q']), console.log(this.searchQuery)
      )
    );
  }

  ngOnInit(): void {
    this.subscription = this._musicDataService
      .searchArtists(this.searchQuery)
      .subscribe(
        (data) =>{
          (this.results = data.artists.items.filter(
            (item) => item.images.length > 0
          )); console.log('search artists',this.results)}
      );
  }
}

// this.subscription = this._musicDataService
//   .searchArtists(this.searchQuery)
//   .subscribe(
//     (data) =>
//       (this.results = data.artists.items.filter(
//         (curValue, _index, self) =>
//           self.findIndex((t) => t.images.length === curValue.images.length) > 0
//       ))
//   );

// this.subscription = this._musicDataService
//   .searchArtists(this.searchQuery)
//   .subscribe(
//     (data) => (
//       (this.results = data.artists.items),
//       console.log('Searchquery results', this.results)
//     )
//   );
