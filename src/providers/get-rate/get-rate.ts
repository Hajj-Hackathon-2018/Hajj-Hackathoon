import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTimeData } from '../../../node_modules/ionic-angular/umd/util/datetime-util';

/*
  Generated class for the GetRateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


declare function require(url: string);
@Injectable()
export class GetRateProvider {

  constructor() {
    console.log('Hello GetRateProvider Provider');
  }
  dataByMonth(month: number, year: number) {
    let variable = require('./MOCK_DATA.json');


    var array = JSON.parse(JSON.stringify(variable))

    var result = []
    array.forEach(x => {
      if (new Date(x.date).getMonth() == month && new Date(x.date).getFullYear() == year)
        result.push(x)
    });


    console.log(result.length)
    return result

  }

  dataByDay(day: number, month: number, year: number) {
    let variable = require('./MOCK_DATA.json');


    var array = JSON.parse(JSON.stringify(variable))


    var dateConverted = new Date(array[5500].date);
    console.log(dateConverted)
    var result = []
    array.forEach(x => {
      if (new Date(x.date).getMonth() == month && new Date(x.date).getFullYear() == year && new Date(x.date).getUTCDate() == day)
        result.push(x)
    });
    console.log(result.length)
    return result

  }


}
