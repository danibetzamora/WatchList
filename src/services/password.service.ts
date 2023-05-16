import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private afAuth: AngularFireAuth) { }

  async resetPassword(email:string): Promise<void>{
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch(error) {
      console.log(error);
    }
  }

  async confirmPassword(password: string): Promise<boolean> {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const credentials = await this.afAuth.signInWithEmailAndPassword(user.email || '', password);
        if (credentials) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatePassword(newPassword: string): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      await user.updatePassword(newPassword);
    } else {
      throw new Error('No se ha iniciado sesión.');
    }
  }
}
