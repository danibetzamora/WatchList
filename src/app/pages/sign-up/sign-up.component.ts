import { Component } from '@angular/core';
import { GoogleAuthService } from 'src/services/google-auth.service';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private googleService: GoogleAuthService, private router: Router, private firestore: Firestore) { }

  GoogleSignIn(){
    this.googleService.signInWithGoogle();
  }
  
  signUp(emailPass: string, userName: string, userLastName: string, userBirth: string, passwordPass: string, confirmPasswordPass: string): void{
    if (!this.checkPasswordMatch(passwordPass, confirmPasswordPass)) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.checkPasswordLength(passwordPass)) {
      alert('Password must be at least 6 characters');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailPass, passwordPass)
      .then(value => {
        console.log('Success!', value);

        const userId = value.user.uid;
        const userData = {
          name: userName,
          last_name: userLastName,
          birth_date: userBirth,
          email: emailPass,
          films_to_watch_list: [],
          films_watched_list: [],
          series_to_watch_list: [],
          series_watching_list: [],
          series_watched_list: [],
          videos_to_watch_list: [],
          videos_watched_list: []
        };

        const userRef = doc(this.firestore, 'users', userId);

        setDoc(userRef, userData)
          .then(() => {
            console.log('New user created on Firestore');
          })
          .catch((error) => {
            console.error('Error with the creation of the user', error);
          });

        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      });
  }

  checkPasswordMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }

  checkPasswordLength(password: string): boolean {
    return password.length >= 6;
  }
}