import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RocketDetailPage} from "../rocket-detail/rocket-detail";
import { ILaunches } from '../../models/launches/ILaunches';
import { RocketListPage } from '../rocket-list/rocket-list';
import { IRocket } from '../../models/rocket/IRocket';

/**
 * Generated class for the LaunchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-detail',
  templateUrl: 'launch-detail.html',
})
export class LaunchDetailPage {

  launch : ILaunches;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launch = this.navParams.data;
    console.log(this.launch);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailPage');
  }

  goToRocketDetail(rocket: IRocket){
    console.log(this.launch);
    this.navCtrl.push(RocketDetailPage, rocket.id);
  }

}
