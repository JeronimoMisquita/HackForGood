import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform  } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';



/**
 * Generated class for the QrCodeReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-reader',
  templateUrl: 'qr-code-reader.html',
})
export class QrCodeReaderPage {
  constructor(public platform:Platform,private qrScanner: QRScanner, public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then(()=>{
                 this.qrscanner();
               })
  }

  ionViewDidLoad() {}

despensedWater(){

  this.navCtrl.pop();

}

qrscanner() {
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted
       window.document.querySelector('#giveWater').setAttribute("style", "visibility:hidden;width:0%;height:0%;");
       window.document.querySelector('ion-app').setAttribute("style", "visibility:hidden;");
       window.document.querySelector('ion-app').setAttribute("style", "background: transparent none;");
       window.document.querySelector('#cameraDisplay').setAttribute("style", "visibility:visible;width:100%;height:auto;");
       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

          alert("QR code valid !");

         this.qrScanner.hide();
         scanSub.unsubscribe();

        // window.document.querySelector('.main-background').classList.remove('transparentBody');
        window.document.querySelector('ion-app').removeAttribute("style");
        window.document.querySelector('#cameraDisplay').setAttribute("style", "visibility:hidden;height:0;width:0;");
        window.document.querySelector('ion-app').setAttribute("style", "visibility:visible;");
        window.document.querySelector('#giveWater').setAttribute("style", "visibility:visible;width:100%;height:100%;");
       });

       this.qrScanner.resumePreview();

      // show camera preview
      this.qrScanner.show()
      .then((data : QRScannerStatus)=> {
        //alert(data.showing);
      },err => {
        //alert(err);
      });

      // wait for user to scan something, then the observable callback will be called


     } else if (status.denied) {

       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.

     }
  })
  .catch((e: any) => console.log('Error is', e));


}
}
