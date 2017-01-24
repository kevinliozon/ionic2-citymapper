import { Component } from '@angular/core';
import { __platform_browser_private__,
  SafeResourceUrl,
  DomSanitizer } from '@angular/platform-browser';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {

  }

  updateMap(slug: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    slug = '37ramy';
    let iFrameURL = 'https://citymapper.com/widget/'+slug;
    return this.sanitizer.bypassSecurityTrustResourceUrl(iFrameURL);
  }

}
