import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'intro-two',
    templateUrl: 'intro-two.component.html',
    styles:[`
      :host{
          max-width:320px;
          display:block;
          margin:0 auto;
        }
    `]
})
export class IntroTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}