/*********************************************************************************
 * WEB304 – Assignment 03
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: Joseph Oladunmoye__ Student ID: ______________ Date: _2023/08/16__
 *
 ********************************************************************************/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'web304-a2';
  public searchString: string | undefined;

  constructor(private router: Router) {}
  handleSearch() {
    this.router.navigate(['search'], {queryParams: {q:`${this.searchString}`, type: 'artist', limit: '50'}});
    this.searchString = '';
  }
}
