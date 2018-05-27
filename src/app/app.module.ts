import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import {HttpClientModule} from "@angular/common/http";
import {LaunchListPage} from "../pages/launch-list/launch-list";
import {LaunchDetailPage} from "../pages/launch-detail/launch-detail";
import {RocketDetailPage} from "../pages/rocket-detail/rocket-detail";
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { SettingsPage } from '../pages/settings/settings';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailPage,
    RocketDetailPage,
    RocketListPage,
    CapsuleListPage,
    LaunchpadListPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LaunchListPage,
    LaunchDetailPage,
    RocketDetailPage,
    RocketListPage,
    CapsuleListPage,
    LaunchpadListPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider
  ]
})
export class AppModule {}
