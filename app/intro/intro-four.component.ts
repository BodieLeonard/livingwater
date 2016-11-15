import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'intro-four',
    templateUrl: 'intro-four.component.html',
    styles:[`
      :host{
          max-width:320px;
          display:block;
          margin:0 auto;
        }
    `]
})
export class IntroFourComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}