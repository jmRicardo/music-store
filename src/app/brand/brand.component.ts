import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent{
  /** Based on the screen size, switch from standard to one column per row */

  cards = [];
  cardsForDesktop = [];
  cardsForWeb = [];

  isDesktop:boolean = false;
  isHandsetObs$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(){
    this.isHandsetObs$.subscribe(value => {
      this.isDesktop = value;
      this.loadCards();
    })
  }
  
  loadCards(){
    this.cards = this.isDesktop ? this.cardsForDesktop : this.cardsForWeb;
  }
  
}


