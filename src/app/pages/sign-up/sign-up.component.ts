import { Component } from '@angular/core';
import { GoogleAuthService } from 'src/services/google-auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private googleService: GoogleAuthService,
  ) {}

  GoogleSignIn(){
    this.googleService.signInWithGoogle();
  }
}
