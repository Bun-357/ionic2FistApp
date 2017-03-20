import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Page1Page} from '../pages/page1/page1';
import {Page2Page} from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	Page1Page,
  Page2Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	Page1Page,
  Page2Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
