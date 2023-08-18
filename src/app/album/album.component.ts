import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: [
    `
      .flex-container {
        display: flex;
      }

      .flex-child {
        flex: 1;
      }

      .flex-child:first-child {
        flex: 0 1 50px;
      }

      .flex-child:second-child {
        margin-right: 20px;
      }

      .flex-child:first-child:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class AlbumComponent implements OnInit {
  public album: any;
  public relatedalbum: any;
  public albumIdFromRoute: any;
  public trackID: any;
  public searchQuery!: Params;

  onClick(trackID: string) {
    // this._musicDataService.addToFavourites(this.trackID);
    // console.log('Adding to Favourites', this.trackID);
    if (this._musicDataService.addToFavourites(trackID) === true) {
      this._matSnackBar.open('Adding to Favourites...', 'Done', {
        duration: 1500,
      });
      console.log('Track ID', trackID)
    }
  }

  constructor(
    private route: ActivatedRoute,
    private _musicDataService: MusicDataService,
    private _matSnackBar: MatSnackBar
  ) {
    // this.route.queryParams.subscribe((data: Params) => console.log(data));
    // this.route.queryParams.subscribe(
    //   (data) => ((this.searchQuery = data), console.log(data))
    // );
    //  console.log(this.searchQuery);
  }
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;
  ngOnInit(): void {
    // Subscribe to params property of ActivatedRoute Service
    this.albumIdFromRoute = this.route.snapshot.params['id'];

    // Get albums for specific artist
    this.subscription1 = this._musicDataService
      .getAlbumById(this.albumIdFromRoute)
      .subscribe((data) => {
        this.album = data;
        // console.log(data);
        this.trackID = data.tracks.items[0].id;
        // console.log('TRACKID',this.trackID);
      });
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }
}

// this.trackID = this.album.tracks.items[0].id;

// this.subscription3 = this._musicDataService
//   .getAlbumById(this.albumIdFromRoute)
//   .subscribe(
//     (data) => (
//       (this.trackID = data.tracks.items[0].id), console.log(this.trackID)
//     )
//   );
// this.trackID = this.album.tracks.items[0].id,
// console.log(data),

// Gets related artist information
// this.subscription2 = this._musicDataService
//   .getRelatedArtistById(this.albumIdFromRoute)
//   .subscribe(
//     (data) => ((this.album = data), console.log('Related Artist', data))
//   );
