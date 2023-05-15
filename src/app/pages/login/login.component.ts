import { Component } from '@angular/core';
import { User } from "../../../services/user.model";
import { UserService } from "../../../services/user.service";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { Router} from '@angular/router';

let app=initializeApp(environment.firebase);
const auth = getAuth(app);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LogInForm! :FormGroup;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.LogInForm = this.formBuilder.group({email: ['',[ Validators.required, Validators.email] ],
      password: ['', [Validators.required,  Validators.maxLength(30)]]
    });
  }
  get email(){
    return this.LogInForm.get('email')
  }
  LogIn(){
    let useremail: string=this.LogInForm.value.email;
    let userpassword: string=this.LogInForm.value.password;
    signInWithEmailAndPassword(auth, useremail,userpassword).then((userCredential) => {
    const user = userCredential.user;
    if (user!=null){
      this.router.navigate(['/profile']);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Email o contraseñas incorrectas");
  });
  }
}
