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

  pastLaunches : ILaunch[];
  upcomingLaunches : ILaunch[];
  nextLaunch : ILaunch;

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {

    this.spaceXApi.getPastLaunches().subscribe(data=>{
      this.pastLaunches = data;
    });

    this.spaceXApi.getNextLaunch().subscribe(data=>{
      this.nextLaunch = data;
    });

    this.spaceXApi.getUpcomingLaunches().subscribe(data=>{
      this.upcomingLaunches = data;
    });


    //Default segment select
    this.segmentChoice = "past-launches";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
