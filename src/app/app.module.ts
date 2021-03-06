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
import { TrackDeliveryPage } from '../pages/track-delivery/track-delivery'
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { QrCodeReaderPage } from '../pages/qr-code-reader/qr-code-reader';
import { QRScanner } from '@ionic-native/qr-scanner';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage,
    OrderPage,
    OrderconfirmPage,
    TrackDeliveryPage,
    PaymentSuccessPage,
    QrCodeReaderPage],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    RechargeCardPage,
    OrderPage,
    OrderconfirmPage,
    TrackDeliveryPage,
    PaymentSuccessPage,
    QrCodeReaderPage
],
  providers: [
    QRScanner,
    StatusBar,
    SplashScreen,Network,Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    GoogleMapsProvider,
    RestProvider
  ]
})
export class AppModule {}
