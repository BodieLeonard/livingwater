import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CalculatorService } from '../calculator/calculator.service'
@Component({
    moduleId: module.id,
    selector: 'gauge',
    templateUrl: 'gauge.component.html',
    styleUrls: ['gauge.component.css'],
    changeDetection: ChangeDetectionStrategy.Default

})
export class GaugeComponent implements OnInit {

    total: number;

    constructor(
      private router: Router,
      private calculatorService: CalculatorService) { }

    ngOnInit() {
        this.total = this.calculatorService.getTotalWaterUsage();

        this.calculatorService.totalWaterUsageUpdated.subscribe(
          (count: number)=> {
              debugger;
              this.total = count;
          }
        )
    }

    onTotal(){
      this.router.navigate(['water/total'])
    }

}