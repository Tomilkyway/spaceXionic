import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpacexApiProvider} from "../../providers/spacex-api/spacex-api";
import {ILaunch} from "../../models/ILaunch";

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {

  launches : ILaunch[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {

    this.spaceXApi.getAllLaunches().subscribe(data=>{
      this.launches = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
