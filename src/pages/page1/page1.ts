import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Page2Page} from '../page2/page2';

/*
  Generated class for the Page1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page1',
  template: 'time',
  templateUrl: 'page1.html'
})
export class Page1Page {

   time: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.time = new Date();
     setInterval(() => this.time = new Date(), 1000);


  }

  goToPage2() {
    this.navCtrl.push(Page2Page, {
    thing1: "data1",
    thing2: "data2" });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');

  }


}
