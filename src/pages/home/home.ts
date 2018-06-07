import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    console.log('logout');
    this.afAuth.auth.signOut();
  }

}
