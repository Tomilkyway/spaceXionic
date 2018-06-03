import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RocketDetailPage} from "../rocket-detail/rocket-detail";
import { ILaunches } from '../../models/launches/ILaunches';

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

  goToRocketDetail(){
    console.log(this.launch);
    this.navCtrl.push(RocketDetailPage, this.launch.rocket);
  }

}
