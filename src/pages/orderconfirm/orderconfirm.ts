import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DashboardPage } from '../dashboard/dashboard';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OrderconfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderconfirm',
  templateUrl: 'orderconfirm.html',
})
export class OrderconfirmPage {
  location_name : string;
  orderDetails : any;


  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams , public restProvider : RestProvider) {
      this.location_name = navParams.get('data');
      this.orderDetails = { mobile: 7768898686,cans:0,address:null };
      console.log(this.location_name);

  }

  showAlert() {
     const alert = this.alertCtrl.create({
       title: 'Order Info',
       subTitle: 'Your order of water delivery is submitted',
       buttons: ['OK']
     });
     alert.present();
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderconfirmPage');
  }
  private currentNumber = 0;
  private increment() {
 this.currentNumber++;
}

  private decrement () {
    if(this.currentNumber>0){
      this.currentNumber--;}
  }
  submit(){
    this.orderDetails.cans = this.currentNumber;
    this.orderDetails.address = this.location_name;
    this.restProvider.addOrder(this.orderDetails).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
    this.showAlert();
    this.navCtrl.push(DashboardPage);

  }

}
