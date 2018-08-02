import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';


/**
 * Generated class for the LogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logo',
  templateUrl: 'logo.html',
})
export class LogoPage {

  constructor(public navCtrl: NavController,private app: App, public navParams: NavParams)
   {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoPage');
  }

}
