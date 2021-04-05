import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BrandService } from '../services/brand.service';
import { Brand } from '../models/brand';
import {Select, Store} from '@ngxs/store';
import {BrandState} from '../states/brand.state';
import {IBrand} from '../models/IBrand';
import {GetBrands, UpdatePositions} from '../actions/brand.action';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit, AfterViewInit{
  // @ts-ignore
  @Select(BrandState.getBrands) brands: Observable<IBrand[]>;
  cards: IBrand[] = [];
  newCards: IBrand[] = [];

  isHandSet: boolean = false;

  isHandsetObs$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetBrands());

    this.loadCards();

    this.isHandsetObs$.subscribe(value => {
      this.isHandSet = value;
      this.loadCards();
    });
  }



  loadCards(): void {
    let row: number;
    let col: number;
    col = this.isHandSet ? 2 : 1;
    row = this.isHandSet ? 1 : 2;

    this.store.dispatch(new UpdatePositions(row, col));

    //this.cards = this.newCards;

    //this.cards.sort(() => Math.random() - 0.5);

    //this.cards = this.isHandSet ? this.cardsForHandset : this.cardsForWeb;
  }

  getImage(imageName: string): string{
    return 'url( ' + 'http://localhost:6006/' + imageName + ')';
  }

  ngAfterViewInit(): void {

  }



}


