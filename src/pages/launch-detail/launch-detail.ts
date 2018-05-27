import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ILaunch} from "../../models/ILaunch";
import {RocketDetailPage} from "../rocket-detail/rocket-detail";

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

  launch : ILaunch;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launch = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailPage');
  }

  goToRocketDetail(){
    this.navCtrl.push(RocketDetailPage, this.launch.rocket);
  }

}
