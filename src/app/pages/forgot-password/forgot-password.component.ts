import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*import { PasswordService } from 'src/services/password.service';*/
/*import { FormControl } from '@angular/forms';*/

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  /*providers: [PasswordService],*/
})
export class ForgotPasswordComponent {

  /*userEmail = new FormControl('');*/

  constructor(/*private resetPasswdSvc:PasswordService, */
              private router:Router) { }

  async onReset() {
    try {
      window.alert("Correo electrónico enviado, ¡comprueba tu bandeja de entrada!");
      this.router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }
    /*try {
      const email = this.userEmail.value!!;
      await this.resetPasswdSvc.resetPassword(email);
      window.alert("Correo electrónico enviado, ¡comprueba tu bandeja de entrada!");
      this.router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }*/
  }

}
