import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styles: [],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  public releases: any;

  public artistId: any;

  public relatedArtist: any;

  constructor(private _musicDataService: MusicDataService) {}
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;

  ngOnInit() {
    this.subscription1 = this._musicDataService
      .getNewReleases()
      .subscribe((data) => (this.releases = data.albums.items));

    this.subscription2 = this._musicDataService
      .getNewReleases()
      .subscribe((data) => (this.artistId = data.albums.items[0].id));

    // this.subscription3 = this._musicDataService
    //   .getRelatedArtistById(this.artistId)
    //   .subscribe(
    //     (data) => (
    //       (this.relatedArtist = data), console.log('Related Artist', data)
    //     )
    //   );

    // console.log((this.artistId = this.releases.albums.items[0].id));
    // console.log('artist', this.artistId);
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    // this.subscription3?.unsubscribe();
  }
}
