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
  email: string = '';
  password: string = '';

  constructor(private googleService: GoogleAuthService, private router: Router, private firestore: Firestore) { }

  GoogleSignIn(){
    this.googleService.signInWithGoogle();
  }
  
  signUp(emailPass: string, passwordPass: string, userName: string): void{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailPass, passwordPass)
      .then(value => {
        console.log('Success!', value);

        const userId = value.user.uid;
        const userData = {
          name: userName,
          email: emailPass,
          to_watch_list: [],
          watched_list: [],
          watching_list: []
        };

        const userRef = doc(this.firestore, 'users', userId);

        setDoc(userRef, userData)
          .then(() => {
            console.log('Nuevo usuario creado exitosamente en Firestore');
          })
          .catch((error) => {
            console.error('Error al crear el nuevo usuario en Firestore:', error);
          });

        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      });
  }
}