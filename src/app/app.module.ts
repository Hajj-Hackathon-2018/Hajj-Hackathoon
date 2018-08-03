import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar } from '@ionic-native/calendar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogoPage } from '../pages/logo/logo';
import { DayDetailsPage } from '../pages/day-details/day-details';
import { GetRateProvider } from '../providers/get-rate/get-rate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogoPage,
    DayDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogoPage,
    DayDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Calendar,
    GetRateProvider
  ]
})
export class AppModule { }
