import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyB9C3g8nSVAZVh5-Eb_f0sGlK0HW9KkRns",
  authDomain: "netsaimada-24a75.firebaseapp.com",
  databaseURL: "https://netsaimada-24a75.firebaseio.com",
  storageBucket: "netsaimada-24a75.appspot.com",
  messagingSenderId: "546577397240"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
