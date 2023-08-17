import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styles: [],
})
export class ArtistDiscographyComponent implements OnInit {
  public albums: any;
  public artist: any;
  public artistIdFromRoute: any;

  public relatedArtist: any;

  constructor(
    private route: ActivatedRoute,
    private _musicDataService: MusicDataService
  ) {}

  ngOnInit() {
    this.artistIdFromRoute = this.route.snapshot.params['id'];
    console.log('Artist id from route', this.artistIdFromRoute);

    this._musicDataService
      .getArtistById(this.artistIdFromRoute)
      .subscribe((data) => (this.artist = data));

    this._musicDataService
      .getAlbumsByArtistId(this.artistIdFromRoute)
      .subscribe(
        (data) =>
          (this.albums = data.items.filter(
            (curValue, index, self) =>
              self.findIndex(
                (t) => t.name.toUpperCase() === curValue.name.toUpperCase()
              ) === index
          ))
      );

    // this._musicDataService
    //   .getRelatedArtistById(this.artistIdFromRoute)
    //   .subscribe(
    //     (data) => (
    //       (this.relatedArtist = data), console.log('Related Artist', data)
    //     )
    //   );
  }
}
