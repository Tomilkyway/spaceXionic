import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunchPads } from '../../models/launchpads/ILaunchPads';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';

/**
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {

  launchpads : ILaunchPads[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {
    this.spaceXApi.getAllLaunchPads().subscribe(data=>{
      this.launchpads = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }

  goToLaunchpadDetail(launchpad : ILaunchPads){
    this.navCtrl.push(LaunchpadDetailPage, launchpad.id);
  }

}
