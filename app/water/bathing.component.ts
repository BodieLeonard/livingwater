import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bathing',
    templateUrl: 'bathing.component.html'
})
export class BathingComponent implements OnInit {

    childTxtHeadline = 'Do you enjoy a long <strong>bath</strong> or a quick <strong>shower</strong>';
    constructor() { }

    ngOnInit() { }

}