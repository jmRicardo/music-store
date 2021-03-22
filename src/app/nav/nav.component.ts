import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  title:string = 'M U S I C  S T O R E';

  isDarkTheme:boolean = true  ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(){
    this.isDarkTheme = localStorage.getItem('theme') === "Dark";
  }

  storeThemeSelection(){
    localStorage.setItem('theme',this.isDarkTheme ? "Dark" : "Light");
  }

}
