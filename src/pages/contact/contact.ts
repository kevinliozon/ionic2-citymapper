import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform = platform;
  }

  initGeoloc(){
    this.platform.ready().then(() => {
      let locationOptions = {timeout: 70000, enableHighAccuracy: true};

        navigator.geolocation.getCurrentPosition(

            (position) => {
                console.log(position);
            },

            (error) => {
                console.log(error);
            }, //locationOptions

        );

        navigator.geolocation.watchPosition(

            (position) => {
                console.log(position);
            },

            (error) => {
                console.log(error);
            }

        );
    });
  }

  systemBrowserLink(){
    window.open("https://citymapper.com/go/c6a384", "_system");
  }

  inAppLink(){
    window.open("https://citymapper.com/go/c6a384", "_blank");
  }

  inAppLinkNoUrl(){
    window.open("https://citymapper.com/go/c6a384", "_blank", "location=no");
  }

}
