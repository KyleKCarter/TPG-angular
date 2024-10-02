import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RideResponse } from '../models/rides.model';
import { ParkService } from '../service/park.service';


@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  park: string = '';
  ridesFromResponse: RideResponse | undefined;
  rides: any[] = [
    {
        "id": 0,
        "name": "Caro-Seuss-el",
        "type": "Slow Ride",
        "img": "https://images.squarespace-cdn.com/content/v1/56b92fd6f8508249cabeff0a/1460320676590-FIC651ASM3H3JPH6GA6S/caro-seuss-el-ride.jpg?format=1000w",
        "video": "",
        "awt": ""
    },
    {
        "id": 1,
        "name": "Doctor Doom's Fearfall",
        "type": "Thrill Ride",
        "img": "https://upload.wikimedia.org/wikipedia/commons/8/82/Marvel_Super_Hero_Island_23.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 2,
        "name": "Dudley Do-Right's Ripsaw Falls",
        "type": "Water Ride, Thrill Ride",
        "img": "https://a.cdn-hotels.com/gdcs/production25/d844/a80afc51-c540-4380-a82c-f16b5e3bcd9b.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 3,
        "name": "Flight of the Hippogriff",
        "type": "Thrill Ride",
        "img": "https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-flight-of-the-hippogriff-coaster-c.jpg?imwidth=361",
        "video": "",
        "awt": ""
    },
    {
        "id": 4,
        "name": "Hagrid's Magical Creatures Motobike Adventure",
        "type": "Thrill Ride",
        "img": "https://www.slashfilm.com/wp/wp-content/images/Hagrids-Magical-Creatures-Motorbike-Adventure-1.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 5,
        "name": "Harry Potter and the Forbidden Journey",
        "type": "Thrill Ride, Dark, Indoor",
        "img": "https://assets.mugglenet.com/wp-content/uploads/2018/06/USH_Forbidden_Journey_Promo.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 6,
        "name": "Hogwarts Express",
        "type": "Slow Ride",
        "img": "https://cache.undercovertourist.com/media_file/hogwarts-express-hogsmeade-9122.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 7,
        "name": "Jurassic Park River Adventure",
        "type": "Thrill Ride, Water Ride",
        "img": "https://cache.undercovertourist.com/media_file/jurassic-park-river-adventure-12553.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 8,
        "name": "Jurassic World VelociCoaster",
        "type": "Thrill Ride",
        "img": "https://orlandoinformer.com/wp-content/uploads/2021/04/Jurassic-World-VelociCoaster-1.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 9,
        "name": "One Fish, Two Fish, Red Fish, Blue Fish",
        "type": "Slow Ride, Spinning",
        "img": "https://cache.undercovertourist.com/media_file/one-fish-two-fish-red-fish-blue-fish-12559.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 10,
        "name": "Popeye & Bluto's Bilge-Rat Barges",
        "type": "Thrill Ride, Water Ride",
        "img": "https://blog.universalorlando.com/wp-content/uploads/2021/04/PopeyeBluto5.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 11,
        "name": "Pteranodon Flyers",
        "type": "Slow Ride, Kids",
        "img": "https://s7d2.scene7.com/is/image/TWCNews/0623_n13_pteranodon_flyers_universal_file_generic_website_photo",
        "video": "",
        "awt": ""
    },
    {
        "id": 12,
        "name": "Skull Island: Reign of Kong",
        "type": "Thrill Ride, Indoor, Dark",
        "img": "https://orlandoparkstop.com/wp-content/uploads/2016/06/CixNdoUWEAAPcmh.jpg-large.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 13,
        "name": "Storm Force Accelatron",
        "type": "Spinning",
        "img": "http://www.themeparkreview.com/forum/files/16-stormforce_841.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 14,
        "name": "The Amazing Adventures of Spider-Man",
        "type": "Thrill Ride, Indoor, Dark",
        "img": "https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-amazing-adventures-of-spiderman-ride-screen-c.jpg?imwidth=361",
        "video": "",
        "awt": ""
    },
    {
        "id": 15,
        "name": "The Cat in the Hat",
        "type": "Slow Ride, Indoor",
        "img": "https://images.squarespace-cdn.com/content/v1/56b92fd6f8508249cabeff0a/1462203391914-XR5FBSON9K3VEIV45Z5J/the-cat-in-the-hat-ride-entrance.jpg?format=1000w",
        "video": "",
        "awt": ""
    },
    {
        "id": 16,
        "name": "The High in the Sky Seuss Trolley Train Ride!",
        "type": "Slow Ride",
        "img": "https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-high-in-the-sky-seuss-trolly-train-ride-people-a.jpg",
        "video": "",
        "awt": ""
    },
    {
        "id": 17,
        "name": "The Incredible Hulk Coaster",
        "type": "Thrill Ride",
        "img": "https://a.cdn-hotels.com/gdcs/production24/d1726/b1d420b7-6b89-4cbd-a42f-40931edaefbe.jpg",
        "video": "",
        "awt": ""
    }
];

  constructor(
    private route: ActivatedRoute,
    private _parkService: ParkService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.setPark();
  }

  backClick(): void {
    this._location.back()
  }

  setPark(): void {
    // Function will set what display is shown
    this.route.paramMap
      .subscribe(params => {
        this.park = params.get('park') || ''
        console.log(this.park)
      });

    this.getRides();
  }

  getRides(): void {
    // function get's and set's the ride based off of the park
    this._parkService.getRides(this.park).subscribe(response => {
      console.log("rides response: ", response)
      if (response) {
        this.ridesFromResponse = response
      }
    })
  }

}
