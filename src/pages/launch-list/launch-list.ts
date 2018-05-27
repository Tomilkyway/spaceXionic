import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpacexApiProvider} from "../../providers/spacex-api/spacex-api";
import {ILaunch} from "../../models/ILaunch";
import {LaunchDetailPage} from "../launch-detail/launch-detail";

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
  //Default segment select
  segmentChoice = "past-launches";

  timeForNextLaunch = "00d : 00h : 00m: 00s";

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {

    this.spaceXApi.getPastLaunches().subscribe(data=>{
      this.pastLaunches = data;
    });

    this.spaceXApi.getNextLaunch().subscribe(data=>{
      this.nextLaunch = data;
      setInterval(this.calculTimeForNExtLaunch.bind(this),1000);
    });

    this.spaceXApi.getUpcomingLaunches().subscribe(data=>{
      this.upcomingLaunches = data;
    });

  }

  calculTimeForNExtLaunch(){
    var launchDate = new Date(this.nextLaunch.launch_date_utc);
    var now = new Date();

    var timeDiff = Math.abs(now.getTime() - launchDate.getTime());
    var diffSec = Math.ceil(timeDiff / (1000));

    var nbDays  = parseInt(diffSec / (3600 * 24));
    var nbDaysInSec = nbDays * 3600 * 24;

    var nbHours = parseInt((diffSec - nbDaysInSec) / (3600));
    var nbHoursInSec = nbHours * 3600;

    var nbMins  = parseInt((diffSec - nbHoursInSec - nbDaysInSec) / 60);
    var nbMinsInSec = nbMins * 60;

    var nbSecs = diffSec - nbMinsInSec - nbHoursInSec - nbDaysInSec;

    if(nbSecs == 0 && nbMins == 0 && nbHours == 0 && nbDays){
      this.spaceXApi.getNextLaunch().subscribe(data=>{
        this.nextLaunch = data;
      });
    }

    this.timeForNextLaunch = nbDays + "d : " + nbHours + "h : " + nbMins + "m : " + nbSecs + "s";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  goToLaunchDetail(launch : ILaunch){
    this.navCtrl.push(LaunchDetailPage, launch);
  }

}
