import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RechargeCardPage} from '../recharge-card/recharge-card';
import {OrderPage} from '../order/order';
import {QrCodeReaderPage} from '../qr-code-reader/qr-code-reader'
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToRecharge(){


    this.navCtrl.push(RechargeCardPage);

  }
  goToOrder(){
    this.navCtrl.push(OrderPage);
  }

  goToQrScanner(){

   this.navCtrl.push(QrCodeReaderPage);

 }

}
