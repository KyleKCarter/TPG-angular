import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {
  resorts: any = [
    {
      id: 1,
      name: 'Disney World'
    },
    {
      id: 2,
      name: 'Universal Studios Orlando'
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //route that gives us all of the paramaters in this route
    this.route.paramMap
      .subscribe(params => {
        // console.log(params)
        let id = +params.get('id')
        // service.getResort(id);
        console.log(id);
      });
  }

}
