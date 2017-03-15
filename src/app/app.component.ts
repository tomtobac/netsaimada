import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
  <p *ngIf="!(af.auth | async)">
    You must be login <button (click)="googleLogin()">Google Login</button>
  </p>
  <ul *ngIf="(af.auth | async)">
    <li *ngFor="let obj of root | async">
      {{ obj | json }}
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  root: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.root = this.af.database.list('/');
  }

  googleLogin() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });
  }

}
