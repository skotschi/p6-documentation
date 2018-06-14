import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _location: Location) {
  }
  backClicked() {
      this._location.back();
  }

  forwardClicked() {
    this._location.forward();
}

  ngOnInit() {
  }

}
