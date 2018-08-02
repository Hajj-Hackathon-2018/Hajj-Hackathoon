import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DayDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day-details',
  templateUrl: 'day-details.html',
})
// export interface HourData{
//   hour?:number,
//   weight?:number,
//   temperature?:number
  
// }
export class DayDetailsPage {
  day: number
  month: String
  year: number
  hourDate=[]
  outputArray=[]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.day=this.navParams.get('day')
    this.month=this.navParams.get('month')
    this.year=this.navParams.get('year')
    this.hourDate=this.navParams.get('hourDate')
    for(let i=0;i<24;i++){
      this.outputArray.push({hour:i+1,temp:23+i})

    }
    
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayDetailsPage');
  }

}
