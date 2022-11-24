import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ElementDecorator } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanActive = false;
  scanResult = "";
  @ViewChild('video', { static: false }) video: ElementRef | undefined;

  videoElement: any;

  constructor(private toastCtrl: ToastController) { }

  ngAfterViewInit() {
    this.videoElement = this.video?.nativeElement;
  }

  startScan() {

  }

  // Helper functions

  stopScan() {
    this.scanActive = false;
  }

  reset() {
    this.scanResult = "";
  }

  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      position: `top`,
      buttons: [
        {
          text: `Open`,
          handler: () => {
            window.open(this.scanResult, '_system', 'location=yes');
          }
        }
      ]
    });
    toast.present();
  }



}
