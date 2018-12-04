import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {DashboardPage} from '../pages/dashboard/dashboard'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RechargeCardPage } from '../pages/recharge-card/recharge-card';
import { OrderPage } from '../pages/order/order';
import { OrderconfirmPage } from '../pages/orderconfirm/orderconfirm';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { QrCodeReaderPage } from '../pages/qr-code-reader/qr-code-reader';
import { QRScanner } from '@ionic-native/qr-scanner';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage,
    OrderPage,
    OrderconfirmPage,
    PaymentSuccessPage,
    QrCodeReaderPage
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
    RechargeCardPage,
    OrderPage,
    OrderconfirmPage,
    PaymentSuccessPage,
    QrCodeReaderPage
  ],
  providers: [
    QRScanner,
    StatusBar,
    SplashScreen,Network,Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    GoogleMapsProvider
  ]
})
export class AppModule {}
