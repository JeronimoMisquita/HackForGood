import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.location_name = navParams.get('data');
      console.log(this.location_name);
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

}
