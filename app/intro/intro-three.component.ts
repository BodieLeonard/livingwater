import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'intro-three',
    templateUrl: 'intro-three.component.html',
    styles:[`
      :host{
          max-width:320px;
          display:block;
          margin:0 auto;
        }
    `]
})
export class IntroThreeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}