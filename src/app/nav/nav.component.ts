import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DropDownAnimation } from './animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [DropDownAnimation]
})
export class NavComponent implements OnInit {
  currentPath?: string;
  isOpen = false;
  routeArr = [
    {
      link: '/',
      page: 'Home'
    },
    {
      link: '/resorts',
      page: "Resorts"
    },
    {
      link: '/schedule',
      page: 'Schedule'
    }
  ]

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    this.currentPath = window.location.href.split('/').pop()
    console.log(this.currentPath)
  }
  
  ngOnChanges(): void {
    // this.href = this.route.snapshot
    this.currentPath = window.location.href.split('/').pop()
    console.log('snapshot', this.route.snapshot);
  }

  //eventually want to have profiles and depending on if logged in show profile in nav bar


}
