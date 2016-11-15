import { Component, OnInit } from '@angular/core';
import { CalculatorService } from "../calculator/calculator.service";

@Component({
    moduleId: module.id,
    selector: 'water',
    template: '<router-outlet ></router-outlet><div class="main-bg"></div><div class="color-bg blue"></div>',
    styleUrls: ['water.component.css']
})
export class WaterComponent implements OnInit {


    constructor(private _calculatorService: CalculatorService) {
    }

    ngOnInit() { }

}