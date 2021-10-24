import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{ pageTitle }}</h1>
      <ul class="nav nav-bar">
        <li><a [routerLink]="['/welcome']" >Home</a></li>
        <li><a [routerLink]="['/products']" >Products</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}