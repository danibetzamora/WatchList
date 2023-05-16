import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*import { PasswordService } from 'src/services/password.service';*/

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  currentPassword = '';
  newPassword = '';
  repeatNewPassword = '';

  isCurrentPasswordValid = false;
  passwordMatch = false;

  visiblePasswd: boolean = false;

  editable: boolean = true;

  showCurrentPassword = false;
  showNewPassword = false;
  showRepeatNewPassword = false;

  constructor(/*private resetPasswdSvc: PasswordService,*/
              private router: Router){ }


  async onSubmit() {/*
    const error = this.validatePassword();

    if (error !== '') {
      window.alert("error");
    }

    const confirmed = await this.resetPasswdSvc.confirmPassword(this.currentPassword);

    if (confirmed && this.newPassword) {
      this.isCurrentPasswordValid = true;
      await this.resetPasswdSvc.updatePassword(this.newPassword);
      window.alert("La contraseña se ha cambiado correctamente.");
      this.router.navigate(['/user-profile']);
    } else {
      this.isCurrentPasswordValid = false;
      window.alert("La contraseña actual no es correcta o no se ha especificado una nueva contraseña.");
    }*/
  }

  checkPasswords() {
    if (this.newPassword !== this.repeatNewPassword) {
      this.passwordMatch = false;
    } else {
      this.passwordMatch = true;
    }
  }

  validatePassword() {
    let error = '';
    if (!this.passwordMatch) {
      error = 'Las contraseñas nuevas no coinciden.';
    }

    return error;
  }



  visibilityChange1() {
    const eyeControl = document.querySelector('#visibility');
    const passwdField = document.querySelector('#currentPasswd') as HTMLInputElement;
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
      eyeControl?.classList.add('fa-eye-slash');
      eyeControl?.classList.remove('fa-eye');
      passwdField.type = 'password';
    } else {
      this.visiblePasswd = true;
      eyeControl?.classList.add('fa-eye');
      eyeControl?.classList.remove('fa-eye-slash');
      passwdField.type = 'text';
    }
  }

  visibilityChange2() {
    const eyeControl = document.querySelector('#visibility2');
    const passwdField = document.querySelector('#newPasswd') as HTMLInputElement;
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
      eyeControl?.classList.add('fa-eye-slash');
      eyeControl?.classList.remove('fa-eye');
      passwdField.type = 'password';
    } else {
      this.visiblePasswd = true;
      eyeControl?.classList.add('fa-eye');
      eyeControl?.classList.remove('fa-eye-slash');
      passwdField.type = 'text';
    }
  }

  visibilityChange3() {
    const eyeControl = document.querySelector('#visibility3');
    const passwdField = document.querySelector('#repeatNewPasswd') as HTMLInputElement;
    if (this.visiblePasswd) {
      this.visiblePasswd = false;
      eyeControl?.classList.add('fa-eye-slash');
      eyeControl?.classList.remove('fa-eye');
      passwdField.type = 'password';
    } else {
      this.visiblePasswd = true;
      eyeControl?.classList.add('fa-eye');
      eyeControl?.classList.remove('fa-eye-slash');
      passwdField.type = 'text';
    }
  }


  setEditable(): void {
    if (this.editable) {
      this.editable = true;
    } else {
      this.editable = false;
    }
  }

}
