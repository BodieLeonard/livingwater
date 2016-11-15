import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { IntroComponent } from './intro/intro.component';
import { IntroOneComponent } from './intro/intro-one.component';
import { IntroTwoComponent } from './intro/intro-two.component';
import { IntroThreeComponent } from './intro/intro-three.component';
import { IntroFourComponent } from './intro/intro-four.component';
import { IntroFiveComponent } from './intro/intro-five.component';
import { DwellingComponent } from './water/dwelling.component';
import { LandingComponent } from './landing/landing.component';
import { WaterComponent } from './water/water.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSecondaryComponent } from './navigation-secondary/navigation-secondary.component';
import { GaugeComponent } from './gauge/gauge.component';
import { HeadingComponent } from './heading/heading.component';
import { InstructionComponent } from './instruction/instruction.component';
import { WaterOptionComponent } from './water/option.component';

@NgModule({
  imports:      [
      BrowserModule,
      RouterModule.forRoot([
          { path: 'landing', component: LandingComponent },
          { path: 'intro',
              component: IntroComponent,
              children:[
                  { path: '', redirectTo: '1' },
                  { path: '1', component: IntroOneComponent },
                  { path: '2', component: IntroTwoComponent },
                  { path: '3', component: IntroThreeComponent },
                  { path: '4', component: IntroFourComponent },
                  { path: '5', component: IntroFiveComponent }
              ]

          },
          { path: 'water', component: WaterComponent,
              children:[
                  { path: '', redirectTo: 'dwelling' },
                  { path: 'dwelling', component: DwellingComponent }
              ]
          },
          { path: '', redirectTo: 'intro', pathMatch: 'full' },
          { path: '**', redirectTo: 'intro', pathMatch: 'full' }
      ], {useHash: true})
  ],
  declarations: [
      AppComponent,
      IntroComponent,
      IntroOneComponent,
      IntroTwoComponent,
      IntroThreeComponent,
      IntroFourComponent,
      IntroFiveComponent,
      LandingComponent,
      DwellingComponent,
      WaterComponent,
      NavigationComponent,
      NavigationSecondaryComponent,
      GaugeComponent,
      HeadingComponent,
      InstructionComponent,
      WaterOptionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
