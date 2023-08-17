import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styles: [
    `
      mat-list mat-icon:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class FavouritesComponent implements OnInit {
  public favourites: Array<any> | undefined;
  public id: any;

  constructor(private _musicDataService: MusicDataService) {}

  ngOnInit() {
    console.log('Dele1');
    this._musicDataService
      .getFavourites()
      .subscribe(
        (data) => (
          (this.favourites = data),
          console.log('Getting Favourites list', this.favourites)
        )
      );

    this._musicDataService
      .removeFromFavourites(this.id)
      .subscribe((data) => ((this.id = data[0]), console.log(this.id)));
    console.log('Dele21');
  }
}
