import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IRocket } from '../../models/IRocket';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import {RocketDetailPage} from "../rocket-detail/rocket-detail";

/**
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {

  rockets : IRocket[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {

    this.spaceXApi.getAllRockets().subscribe(data=>{
      this.rockets = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  goToRocketDetail(rocket){
    this.navCtrl.push(RocketDetailPage, rocket);
  }

}
