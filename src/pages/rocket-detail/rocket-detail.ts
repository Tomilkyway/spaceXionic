import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IRocket} from "../../models/IRocket";

/**
 * Generated class for the RocketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-detail',
  templateUrl: 'rocket-detail.html',
})
export class RocketDetailPage {

  rocket : IRocket;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rocket = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailPage');
  }

}
