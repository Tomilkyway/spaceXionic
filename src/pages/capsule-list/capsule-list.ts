import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ICapsule } from '../../models/capsule/ICapsule';
import { CapsuleDetailPage } from '../capsule-detail/capsule-detail';

/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {

  capsules : ICapsule[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {
    this.spaceXApi.getAllCapsules().subscribe(data=>{
      this.capsules = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleListPage');
  }

  goToCapsuleDetail(capsule){
    this.navCtrl.push(CapsuleDetailPage, capsule);
  }

}
