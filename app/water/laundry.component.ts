import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'laundry',
    templateUrl: 'laundry.component.html'
})
export class LaundryComponent implements OnInit {

    childTxtHeadline = 'Clean clothes are a luxury, how often do you clean your <strong>laundry</strong> per week';
    constructor() { }

    ngOnInit() { }

}