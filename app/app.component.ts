import { Component } from '@angular/core';
import {CalculatorService} from "./calculator/calculator.service";

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    providers: [ CalculatorService ],
    styleUrls: ['./app/app.component.css']
})
export class AppComponent { }
