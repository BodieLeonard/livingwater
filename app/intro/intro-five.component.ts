import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'intro-five',
    templateUrl: 'intro-five.component.html',
    styles:[`
      :host{
          max-width:320px;
          display:block;
          margin:0 auto;
        }
    `]
})
export class IntroFiveComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}