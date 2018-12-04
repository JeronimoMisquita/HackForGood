import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {DashboardPage} from '../pages/dashboard/dashboard'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RechargeCardPage } from '../pages/recharge-card/recharge-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
