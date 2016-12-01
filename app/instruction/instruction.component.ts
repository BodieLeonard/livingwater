import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'instruction',
    templateUrl: 'instruction.component.html',
    styleUrls: ['instruction.component.css']

})
export class InstructionComponent implements OnInit {

    @Input() txtHeadline: string;

    constructor() {
    }

    ngOnInit() { }

}