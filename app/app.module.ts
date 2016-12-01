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
import { BathingComponent } from './water/bathing.component';
import { DishwasherComponent } from './water/dishwasher.component';
import { LandingComponent } from './landing/landing.component';
import { WaterComponent } from './water/water.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSecondaryComponent } from './navigation-secondary/navigation-secondary.component';
import { GaugeComponent } from './gauge/gauge.component';
import { HeadingComponent } from './heading/heading.component';
import { InstructionComponent } from './instruction/instruction.component';
import { WaterOptionComponent } from './water/option.component';
import { DonationComponent } from './donation/donation.component';
import { UserComponent } from './donation/user.component';
import { EmailComponent } from './donation/email.component';
import { AddressComponent } from './donation/address.component';
import { PaymentComponent } from './donation/payment.component';
import { PhoneComponent } from './donation/phone.component';
import { ThankyouComponent } from './donation/thankyou.component';
import { WaterGaugeComponent } from './water/gauge/water-gauge.component';

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
                  { path: 'dwelling', component: DwellingComponent },
                  { path: 'bathing', component: BathingComponent },
                  { path: 'dishwasher', component: DishwasherComponent },
                  { path: 'gauge', component: WaterGaugeComponent }
              ]
          },
          { path: 'donation', component: DonationComponent,
              children:[
                  { path: '', redirectTo: 'user' },
                  { path: 'user', component: UserComponent },
                  { path: 'email', component: EmailComponent },
                  { path: 'address', component: AddressComponent },
                  { path: 'donation', component: DonationComponent },
                  { path: 'payment', component: PaymentComponent },
                  { path: 'phone', component: PhoneComponent },
                  { path: 'thankyou', component: ThankyouComponent },
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
      BathingComponent,
      DishwasherComponent,
      WaterComponent,
      NavigationComponent,
      NavigationSecondaryComponent,
      GaugeComponent,
      HeadingComponent,
      InstructionComponent,
      WaterOptionComponent,
      DonationComponent,
      UserComponent,
      EmailComponent,
      AddressComponent,
      DonationComponent,
      PaymentComponent,
      PhoneComponent,
      ThankyouComponent,
      WaterGaugeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
