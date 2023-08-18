import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';

import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  constructor(
    private spotifyToken: SpotifyTokenService,
    private http: HttpClient
  ) {}

  favouritesList: Array<any> = [];

  getNewReleases(): Observable<SpotifyApi.ListOfNewReleasesResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.ListOfNewReleasesResponse>(
          'https://api.spotify.com/v1/browse/new-releases',
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  // Q2: getArtistById(id)
  // Returns an Observable<SpotifyApi.SingleArtistResponse> obtained by making a GET request to the Spotify
  // endpoint: "https://api.spotify.com/v1/artists/id", where id is the value of the "id" parameter.
  getArtistById(id: any): Observable<SpotifyApi.SingleArtistResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.SingleArtistResponse>(
          `https://api.spotify.com/v1/artists/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  // Q3: getAlbumsByArtistId(id)
  // Returns an Observable<SpotifyApi.ArtistsAlbumsResponse> obtained by making a GET request to the Spotify
  // endpoint: "https://api.spotify.com/v1/artists/id/albums", where id is the value of the "id" parameter. Also, in
  // order to maximize the amount of relevant results returned by Spotify, add the following additional query
  // parameters:
  // o include_groups=album,single
  // o limit=50

  getAlbumsByArtistId(id: any): Observable<SpotifyApi.ArtistsAlbumsResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(
          `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  // Q4: getAlbumById(id)
  // Returns an Observable<SpotifyApi.SingleAlbumResponse> obtained by making a GET request to the Spotify
  // endpoint: "https://api.spotify.com/v1/albums/id", where id is the value of the "id" parameter.

  getAlbumById(id: any): Observable<SpotifyApi.SingleAlbumResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.SingleAlbumResponse>(
          `https://api.spotify.com/v1/albums/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  // Q5: searchArtists(searchString)
  // Returns an Observable<SpotifyApi.ArtistSearchResponse> obtained by making a GET request to the Spotify
  // endpoint: "https://api.spotify.com/v1/search", with the following query parameters:
  // o q=searchString – where searchString is the value of the "searchString" parameter
  // o type=artist
  // o limit=50

  searchArtists(
    searchString: any
  ): Observable<SpotifyApi.ArtistSearchResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.ArtistSearchResponse>(
          `https://api.spotify.com/v1/search?q=${searchString}&type=artist&limit=50`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  // Q6. addToFavourites(id)
  // This method is used to add the value of the id parameter to the favouritesList array property.
  //   However, if the value of id is null / undefined or the number of items in the favouritesList is greater than or
  // equal to 50, then the value of id is not added to the favouritesList and false is returned, indicating that the
  // operation was a failure
  // If the value of id was able to be pushed to the favouritesList, true is returned, indicating that the operation was
  // a success
  // In progress
  addToFavourites(id: any): any {
    // this.favouritesList.push(id);
    if (id === null || id === undefined || this.favouritesList.length >= 50) {
      return false;
    } else {
      this.favouritesList.push(id);
      return true;
    }
  }

  // Q7. removeFromFavourites(id)
  // Used to remove the value of the id parameter from the favouritesList array property and to subsequently return
  // an Observable<any> obtained by invoking the getFavourites() method defined below, ie: "return
  // this.getFavourites()".
  // HINT: Elements can be searched for and removed from an array using a combination of Array.indexOf() and
  // Array.splice()
  removeFromFavourites(id: any): Observable<any> {
    this.favouritesList.splice(this.favouritesList.indexOf(id), 1);
    return this.getFavourites();
  }

  // Q8. getFavourites()
  // This method first checks to see if the length of the favouritesList array property is greater than 0 and if it is, it:
  // o Returns an Observable<any> obtained by making a GET request to the Spotify endpoint:
  // "https://api.spotify.com/v1/tracks", with the following query parameter:
  //  ids=favouritesList Items – the favouritesList items value is a comma-separated list of the items
  // in your favouritesList array property. This can be obtained by invoking Array.join() on
  // favouritesList
  // If the length of the favouritesList array property is less than or equal to 0, it:
  // o Returns an Observable<any> that broadcasts an empty array immediately to any subscribers, ie:
  //  return new Observable(o=>{o.next([])});

  getFavourites(): Observable<any> {
    if (this.favouritesList.length > 0) {
      return this.spotifyToken.getBearerToken().pipe(
        mergeMap((token) => {
          let ids = this.favouritesList.join();
          // var ids = this.favouritesList.join('');
          return this.http.get<any>(
            `https://api.spotify.com/v1/tracks?ids=${ids}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
        })
      );
    } else {
      return new Observable((o) => {
        o.next([]);
      });
    }
  }

  // Additional Features

  // getRelatedArtistById(id: any): Observable<SpotifyApi.SingleArtistResponse> {
  //   return this.spotifyToken.getBearerToken().pipe(
  //     mergeMap((token) => {
  //       return this.http.get<SpotifyApi.SingleArtistResponse>(
  //         `https://api.spotify.com/v1/artists/${id}/related-artists`,

  //         // 'https://api.spotify.com/v1/artists/6DARBhWbfcS9E4yJzcliqQ/related-artists',

  //         { headers: { Authorization: `Bearer ${token}` } }
  //       );
  //     })
  //   );
  // }

  // Additional Features

  // getAlbumsByRelatedArtistId(
  //   id: any
  // ): Observable<SpotifyApi.ArtistsAlbumsResponse> {
  //   return this.spotifyToken.getBearerToken().pipe(
  //     mergeMap((token) => {
  //       return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(
  //         `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50/related-artists`,
  //         { headers: { Authorization: `Bearer ${token}` } }
  //       );
  //     })
  //   );
  // }
}
