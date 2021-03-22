import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Our Store';

  position = {
    lat: -38.01658516047239, 
    lng: -57.5926095600191
  };

  label = {
    color: 'black',
    text: 'AQUI'
  };
}
