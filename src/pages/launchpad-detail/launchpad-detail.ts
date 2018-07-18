import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ILaunchPads } from '../../models/launchpads/ILaunchPads';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the LaunchpadDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-detail',
  templateUrl: 'launchpad-detail.html',
})
export class LaunchpadDetailPage {

  launchpad : ILaunchPads;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXApi : SpacexApiProvider) {
  }

  ionViewDidLoad() {
    this.spaceXApi.getLaunchPad(this.navParams.data).subscribe(launchpad => this.launchpad = launchpad);
  }

}
