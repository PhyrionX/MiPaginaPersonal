import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: `<div class="ui container">
        <div class="center">
        </div>
        <router-outlet></router-outlet>
        <nav class="ui menu inverted teal">
            <a [routerLink]="['/']" class="item">Home</a>
            <a [routerLink]="['/contact']" class="item">Contact Me</a>
        </nav>
      </div>`
})
export class AppComponent {}