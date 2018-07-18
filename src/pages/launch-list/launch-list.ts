import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpacexApiProvider} from "../../providers/spacex-api/spacex-api";
import {LaunchDetailPage} from "../launch-detail/launch-detail";
import { ILaunches } from '../../models/launches/ILaunches';
import { IRocketLaunches } from '../../models/launches/IRocketLaunches';
import { RocketDetailPage } from '../rocket-detail/rocket-detail';
import { ILaunchSiteLaunches } from '../../models/launches/ILaunchSiteLaunches';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';

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

  pastLaunches : ILaunches[];
  pastLaunchesInit : ILaunches[];
  upcomingLaunches : ILaunches[];
  upcomingLaunchesInit : ILaunches[];
  nextLaunch : ILaunches;
  refreshLaunches : ILaunches[];
  //Default segment select
  segmentChoice = "past-launches";
  searchQuery = "";
  showCancelshouldShowCancel = false;

  timeForNextLaunch = "00d : 00h : 00m: 00s";

  constructor(private navCtrl: NavController, private navParams: NavParams, private spaceXApi : SpacexApiProvider) {

    this.spaceXApi.getPastLaunches().subscribe(data=>{
      this.pastLaunches = data.reverse();
      this.pastLaunchesInit = data;
      console.log(this.pastLaunches[0].links.video_link);
    });

    this.spaceXApi.getNextLaunch().subscribe(data=>{
      this.nextLaunch = data;
      setInterval(this.calculTimeForNExtLaunch.bind(this),1000);
    });

    this.spaceXApi.getUpcomingLaunches().subscribe(data=>{
      this.upcomingLaunches = data;
      this.upcomingLaunchesInit = data;
    });

  }

  calculTimeForNExtLaunch(){
    var launchDate = new Date(this.nextLaunch.launch_date_utc);
    var now = new Date();

    var timeDiff = Math.abs(now.getTime() - launchDate.getTime());
    var diffSec = Math.ceil(timeDiff / (1000));

    var nbDays  = Math.floor(diffSec / (3600 * 24));
    var nbDaysInSec = nbDays * 3600 * 24;

    var nbHours = Math.floor((diffSec - nbDaysInSec) / (3600));
    var nbHoursInSec = nbHours * 3600;

    var nbMins  = Math.floor((diffSec - nbHoursInSec - nbDaysInSec) / 60);
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

  goToLaunchDetail(launch : ILaunches){
    this.navCtrl.push(LaunchDetailPage, launch);
  }

  goToRocketDetail(rocket: IRocketLaunches){
    this.navCtrl.push(RocketDetailPage, rocket.rocket_id);
  }

  goToLaunchpadDetail(launchpad: ILaunchSiteLaunches){
    this.navCtrl.push(LaunchpadDetailPage, launchpad.site_id);
  }

  onInput($event) {
    console.log(this.searchQuery);
    this.showCancelshouldShowCancel = this.searchQuery.length > 0;
    this.pastLaunches = this.pastLaunchesInit.filter((launch) => {
      return launch.mission_name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) >= 0;
    });
    this.upcomingLaunches = this.upcomingLaunchesInit.filter((launch) => {
      return launch.mission_name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) >= 0;
    });
  }

  onCancel($event) {
    this.searchQuery = "";
    this.pastLaunches = this.pastLaunchesInit;
    this.upcomingLaunches = this.upcomingLaunchesInit;
    this.showCancelshouldShowCancel = this.searchQuery.length > 0;
  }
        

}
