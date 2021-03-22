import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BrandService } from '../services/brand.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent{
  /** Based on the screen size, switch from standard to one column per row */

  cards: Card[] = [];
  newCards: Card[] = [];

  isHandSet:boolean = false;

  isHandsetObs$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private brandservice:BrandService) {}

  ngOnInit(){
    this.isHandsetObs$.subscribe(value => {
      this.isHandSet = value;
      this.loadCards();
    });

    this.brandservice.getDeals().subscribe(
      response => {
        this.newCards = response;
        this.loadCards();
      },
      error => {
        alert('error al traer los datos de la API');
      }
    )
  }
  
  loadCards(){

    if (this.isHandSet)
    {
      this.newCards.forEach( card => {
        card.col = 2;
        card.row = 1;
      })
    }else{
      this.newCards.forEach( card => {
        card.col = 1;
        card.row = Math.floor(Math.random() * 2) + 1;
      })
    }

    this.cards = this.newCards

    this.cards.sort(() => Math.random() - 0.5);

    console.log(this.cards);

    //this.cards = this.isHandSet ? this.cardsForHandset : this.cardsForWeb;
  }

  getImage(imageName: string): string{
    return 'url( ' + 'http://localhost:6006/' + imageName + ')';
  }
  
}


