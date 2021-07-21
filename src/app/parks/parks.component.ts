import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  disneyWorld: boolean;
  universalStudiosOrlando: boolean;
  resort: any;
  parks: any;
  rides: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setResort();
  }

  setResort(): void {
    // Function will set what display is shown
    this.route.paramMap
      .subscribe(params => {
        this.resort = params.get('park')
        console.log(this.resort)
      });
    if ( this.resort == 'Disney World') {
      this.disneyWorld = true;
      this.universalStudiosOrlando = false;
    } else if ( this.resort == 'Universal Studios Orlando') {
      this.disneyWorld = false;
      this.universalStudiosOrlando = true;
    }
    this.getResort();
  }

  getResort(): void {
    //service call to get resort from server
    //for now will use hardcoded data
    if ( this.resort == 'Disney World') {
      this.parks = [
        {
          id: 0,
          name: 'Magic Kingdom',
          img: 'https://cache.undercovertourist.com/blog/2020/07/0720-magic-kingdom-named-best.jpg'
        },
        {
          id: 1,
          name: 'Epcot',
          img: 'https://www.tripsavvy.com/thmb/Rn2dKFgXgw25chaMUSm_B1cvtcE=/3000x2018/filters:fill(auto,1)/GettyImages-2572620-593e9e2f3df78c537b0d8577.jpg'
        },
        {
          id: 2,
          name: 'Hollywood Studios',
          img: 'https://media2.fdncms.com/orlando/imager/u/original/2409999/1000w_disneyhwoodstudios.jpg'
        },
        {
          id: 3,
          name: 'Animal Kingdom',
          img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c1/a5/1d/mickey-minnie-pluto-sailing.jpg'
        }
      ]
    } else if ( this.resort == 'Universal Studios Orlando') {
      this.parks = [
        {
          id: 0,
          name: 'Universal Studios',
          img: 'https://allears.net/wp-content/uploads/2021/02/2021-reopening-universal-orlando-mardi-gras-signs-2-scaled.jpg'
        },
        {
          id: 1,
          name: 'Islands of Adventure',
          img: 'https://www.magictours.com/wp-content/uploads/Island-Adventure.jpg'
        }
      ]
    }
  }

  getRides() {
    // function get's and set's the ride based off of the park

  }

}
