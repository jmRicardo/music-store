import {IBrand} from '../models/IBrand';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {BrandService} from '../services/brand.service';
import {Injectable} from '@angular/core';
import {GetBrands, UpdatePositions} from '../actions/brand.action';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class BrandStateModel {
  // @ts-ignore
  brands: IBrand[];
}

@State<BrandStateModel>({
  name: 'brands',
  defaults: {
    brands: []
  }
})
@Injectable()
export class BrandState {

  constructor(private brandService: BrandService) {
  }

  @Selector()
  static getBrands(state: BrandStateModel){
    return state.brands;
  }

  @Action(UpdatePositions)
  updatePositions({getState, setState}: StateContext<BrandStateModel>, {row, col }: UpdatePositions): void{
    const state = getState();
    let list: IBrand[] = [];
    state.brands.forEach( val => list.push(Object.assign({}, val)));
    list.forEach( x => {
      x.row = row;
      x.col = col;
    });
    setState({
      ...state,
      brands: list,
      }
    );
  }

  @Action(GetBrands)
  getAllBrands({getState, setState}: StateContext<BrandStateModel>): Observable<IBrand[]> {
    return this.brandService.getBrands().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        brands: result,
      });
    }));
  }
}
