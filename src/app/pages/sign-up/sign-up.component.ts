import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }
  
  signUp(emailPass: string, passwordPass: string): void{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailPass, passwordPass)
      .then(value => {
        console.log('Success!', value);
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      });
    
  }
}
