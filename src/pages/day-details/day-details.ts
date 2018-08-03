import { GetRateProvider } from '../../providers/get-rate/get-rate';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { GetRateProvider } from '../../providers/get-rate/get-rate';

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
export class DayDetailsPage {
  day: number
  month: String
  year: number
  hourDate = []
  outputArray = []


  constructor(public navCtrl: NavController, public navParams: NavParams, public myservice: GetRateProvider) {
    this.day = this.navParams.get('day')
    this.month = this.navParams.get('month')
    this.year = this.navParams.get('year')
    this.hourDate = this.navParams.get('hourDate')
    this.hourDate = this.myservice.dataByDay(1, 7, 2018)

    for (let i = 0; i < 24; i++) {
      let sum = 0
      let count = 0
      let ave = 0
      let temp = 0
      this.hourDate.forEach(x => {
        if (new Date(x.date).getHours() == i) {
          // console.log('hour = ',i,'with date=',x.date)
          count++
          sum += x.flow_rate
          temp += x.temp
          console.log('in hour=', i, 'flow_rate=', x.flow_rate)

        }

      })
      if (count > 0) {
        ave = sum / count
        temp = temp / count


      }
      console.log({ hour: i, flow_rate: Math.round(ave) })

      this.outputArray.push({ hour: i, flow_rate: Math.round(ave), temp: Math.round(temp) })

    }



  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DayDetailsPage');
  }
  test() {
    this.myservice.dataByDay(1, 7, 2018)
  }
  dayAve(day, month, year) {
    let ar = this.myservice.dataByMonth(month, year)
    let sum = 0
    let count = 0
    let total = 0
    ar.forEach(i => {


      if (new Date(i.date).getUTCDate() == day) {
        console.log('day = ', day, ' is ', i.date)
        sum += i.flow_rate
        count++
      }

    })
    if (count != 0) {
      total = sum / count

    }
    console.log(total)



  }

}
