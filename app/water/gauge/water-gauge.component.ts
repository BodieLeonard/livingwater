import {Component, OnInit, state} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CalculatorService} from '../../calculator/calculator.service';


@Component({
  moduleId: module.id,
  selector: 'water-gauge',
  templateUrl: 'water-gauge.component.html',
  styleUrls: ['water-gauge.component.css']

})
export class WaterGaugeComponent implements OnInit {
  counter: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private calculateService: CalculatorService) {
    this.counter = 0;

  }

  ngOnInit() {

    switch(this.route.snapshot.url[0].path){
      case 'dwelling':
        this.counter = this.calculateService.getWaterDwelling();
        break;
      case 'bath':
        this.counter = this.calculateService.getWaterBath();
        break;
      case 'dishwasher':
        this.counter = this.calculateService.getWaterDishwasher();
        break;
      case 'laundry':
        this.counter = this.calculateService.getWaterLaundry();
        break;

      default:
        break;
    }
  }

  onCalculate() {
    this.calculateService.setCalculation(this.router, this.counter);

    if (this.router.url.indexOf('dwelling') > 0) {

      this.router.navigate(['water/bathing']);
      this.calculateService.setWaterDwelling(this.counter);

    } else if (this.router.url.indexOf('bathing') > 0) {

      this.router.navigate(['water/dishwasher']);
      this.calculateService.setWaterBath(this.counter)


    } else if (this.router.url.indexOf('dishwasher') > 0) {

      this.router.navigate(['water/laundry']);
      this.calculateService.setWaterDishwasher(this.counter)


    } else if (this.router.url.indexOf('laundry') > 0) {

      this.router.navigate(['water/total']);
      this.calculateService.setWaterLaundry(this.counter)

    }

  }

  onCancel(){
    window.history.back()
  }

  onAdd() {
    this.counter++;
    this.calculateService.setTotalWaterUsage(this.counter)
  }

  onRemove() {
    if (this.counter > 0) {
      this.counter--;
      this.calculateService.setTotalWaterUsage(this.counter)
    }
  }
}
