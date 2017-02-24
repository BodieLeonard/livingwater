import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dishwasher',
    templateUrl: 'dishwasher.component.html'
})
export class DishwasherComponent implements OnInit {

    childTxtHeadline = 'We all enjoy clean, sanitary dishes but how many times do you usa a <strong>dishwasher</strong> per week?';
    constructor() { }

    ngOnInit() { }

}