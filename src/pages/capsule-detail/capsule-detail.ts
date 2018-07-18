import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ICapsule } from '../../models/capsule/ICapsule';

/**
 * Generated class for the CapsuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-detail',
  templateUrl: 'capsule-detail.html',
})
export class CapsuleDetailPage {

  capsule : ICapsule;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXApi : SpacexApiProvider) {
  }

  ionViewDidLoad() {
    this.spaceXApi.getCapsule(this.navParams.data).subscribe(capsule => this.capsule = capsule);
  }

}
