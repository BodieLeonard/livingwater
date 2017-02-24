import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'total',
  templateUrl: 'total.component.html'
})
export class TotalComponent implements OnInit {

  childTxtHeadline = 'Totals <strong>laundry</strong> per week';
  constructor() { }

  ngOnInit() { }

}