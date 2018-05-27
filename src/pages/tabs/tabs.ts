import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {LaunchListPage} from "../launch-list/launch-list";
import { RocketListPage } from '../rocket-list/rocket-list';
import { CapsuleListPage } from '../capsule-list/capsule-list';
import { LaunchpadListPage } from '../launchpad-list/launchpad-list';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LaunchListPage;
  tab2Root = RocketListPage;
  tab3Root = CapsuleListPage;
  tab4Root = LaunchpadListPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
