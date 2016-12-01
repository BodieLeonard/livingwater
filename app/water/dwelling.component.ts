import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dwelling',
    templateUrl: 'dwelling.component.html'
})
export class DwellingComponent implements OnInit {

    childTxtHeadline = 'Start by selecting your <strong>housing</strong>';
    constructor() { }

    ngOnInit() { }
    
}