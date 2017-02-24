import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service';


@Component({
    moduleId: module.id,
    selector: 'navigation-secondary',
    templateUrl: 'navigation-secondary.component.html',
    styleUrls: ['navigation-secondary.component.css'],
    changeDetection: ChangeDetectionStrategy.Default

})
export class NavigationSecondaryComponent implements OnInit {

    dwellingTotal: number;
    bathTotal: number;
    dishwasherTotal: number;
    laundryTotal: number;

    constructor(private calculatorService: CalculatorService) {
    }

    ngOnInit() {

        this.dwellingTotal = this.calculatorService.getWaterDwelling();
        this.bathTotal = this.calculatorService.getWaterBath();
        this.dishwasherTotal = this.calculatorService.getWaterDishwasher();
        this.laundryTotal = this.calculatorService.getWaterLaundry();

        this.calculatorService.waterDwellingUpdated.subscribe(
          (count: number)=> {
              debugger;
              this.dwellingTotal = count;
          }
        )
        this.calculatorService.waterBathUpdated.subscribe(
          (count: number)=> {
              this.bathTotal = count;
          }
        )
        this.calculatorService.waterDishwasherUpdated.subscribe(
          (count: number)=> {
              this.dishwasherTotal = count;
          }
        )
        this.calculatorService.waterLaundryUpdated.subscribe(
          (count: number)=> {
              this.laundryTotal = count;
          }
        )
    }
}

