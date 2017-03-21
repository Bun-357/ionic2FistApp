import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {Microgear} from 'microgear';
//import * as MicroGear from "microgear";

/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var Microgear: any;
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {
  public d1: any;
  public d2: any;
  public d3: any;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.d1 = navParams.get('thing1');
    this.d2 = navParams.get('thing2');
    //js here


  const APPID  = "Led8x8Mono";
  const APPKEY    = "xoncnBky1ADcJY4";
  const APPSECRET = "Ch5q3AjlPF4yVSbGFZdJqq4Fd";


	var microgear = Microgear.create({
		key: APPKEY,
		secret: APPSECRET,
		alias : "myhtml"         /*  optional  */
	});

	microgear.on('message',function(topic,msg) {
		document.getElementById("data").innerHTML = msg;
    //this.d3 = msg;
	});

	microgear.on('connected', function() {
		microgear.setAlias('htmlgear');    /* alias can be renamed anytime with this function */
		document.getElementById("data").innerHTML = "Now I am connected with netpie...";
    //this.d3 = "Now I am connected with netpie...";
		setInterval(function() {
			microgear.chat("htmlgear","Hello from myself at "+Date());
		},5000);
	});

	microgear.on('present', function(event) {
		console.log(event);
	});

	microgear.on('absent', function(event) {
		console.log(event);
	});

	microgear.connect(APPID);

    //



  }

  ionViewWillLeave() {
      console.log("Looks like I'm about to leave :(");
    }

//_____________

  ionViewDidLoad() {



    console.log('ionViewDidLoad Page2Page');
  }

}
