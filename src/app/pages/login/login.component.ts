import { Component } from '@angular/core';
import { GoogleAuthService } from 'src/services/google-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private googleService: GoogleAuthService,
  ) {}

  GoogleSignIn(){
    this.googleService.signInWithGoogle();
  }
}
