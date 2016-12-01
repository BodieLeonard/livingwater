import { Component, OnInit } from '@angular/core';
import { CalculatorService } from "../calculator/calculator.service";

@Component({
    moduleId: module.id,
    selector: 'donation',
    template: '<router-outlet ></router-outlet><div class="color-bg blue"></div>',
    styleUrls: ['donation.component.css']
})
export class DonationComponent implements OnInit {


    constructor(private _calculatorService: CalculatorService) {
    }

    ngOnInit() { }

}