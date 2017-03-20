import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MicroGear} from 'microgear';
//import * as MicroGear from "microgear";

/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {
  public d1: any;
  public d2: any;
 public require: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.d1 = navParams.get('thing1');
    this.d2 = navParams.get('thing2');



  }

  ionViewWillLeave() {
      console.log("Looks like I'm about to leave :(");
    }

//_____________

  ionViewDidLoad() {
    //var MicroGear = require('microgear');
//var MicroGear = require('microgear');

const APPID  = "Led8x8Mono";
const KEY    = "xoncnBky1ADcJY4";
const SECRET = "Ch5q3AjlPF4yVSbGFZdJqq4Fd";

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setAlias("mygear");
    setInterval(function() {
        microgear.chat('mygear', 'Hello world.');
    },1000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);
    console.log('ionViewDidLoad Page2Page');
  }

}
