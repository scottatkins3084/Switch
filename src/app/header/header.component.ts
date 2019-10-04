import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUrl: string;

  constructor(
    private location: Location
  ) {
    const splitPath = location.path().split('/');
    if(splitPath[1]) {
      this.currentUrl = splitPath[1];
    }else {
      this.currentUrl = 'benefits';
    }
  }

  ngOnInit() {
  }

}
