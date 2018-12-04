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
  scannedData = 'None'
  constructor(public platform:Platform,private qrScanner: QRScanner, public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then(()=>{
                 this.qrscanner();
               })
  }

  ionViewDidLoad() {}
qrscanner() {
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted
       this.scannedData = 'permission granted'

       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
          this.scannedData = text
          alert(text);

         this.qrScanner.hide();
         scanSub.unsubscribe();
         window.document.querySelector('ion-app').classList.remove('transparentBody');
        // window.document.querySelector('.main-background').classList.remove('transparentBody');

       });

       this.qrScanner.resumePreview();

      // show camera preview
      this.qrScanner.show()
      .then((data : QRScannerStatus)=> {
         this.scannedData = "showing something status"
        //alert(data.showing);
      },err => {
        //alert(err);
        this.scannedData = "Err" ;
      });

      // wait for user to scan something, then the observable callback will be called


     } else if (status.denied) {
         this.scannedData = "permission denied"
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
       this.scannedData = "permission was denied, but not permanently. You can ask for permission again at a later time"
     }
  })
  .catch((e: any) => console.log('Error is', e));


}
}
