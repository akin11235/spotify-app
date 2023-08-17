import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {
    path: 'newReleases',
    component: NewReleasesComponent,
    title: ' New releases',
  },
  {
    path: 'artist/:id',
    component: ArtistDiscographyComponent,
    title: 'Artists',
  },
  {
    path: 'artist/:id/related-artists',
    component: ArtistDiscographyComponent,
    title: 'Artists',
  },
  { path: 'album/:id', component: AlbumComponent, title: 'Albums' },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: 'search', component: SearchResultComponent, title: 'Search' },
  { path: 'favourites', component: FavouritesComponent, title: 'Favourites' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
