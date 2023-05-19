import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { User } from 'src/services/user.model';

@Component({
  selector: 'app-page-left',
  templateUrl: './page-left.component.html',
  styleUrls: ['./page-left.component.css']
})
export class PageLeftComponent {

  editable: boolean = false;
  userId: string = '';
  /*
  user: User = {

  };
  */
  constructor(private userService: UserService,
              private router: Router){}


  setEditable(): void {
    if (this.editable) {
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  logOut() {
    this.userService.logOut().then(() => {
      console.log('Sesión cerrada correctamente');
      this.userService.setLoggedUserId('null');
      this.router.navigate(['/login']);
      //
      this.userId = 'null';
    }).catch((error) => {
      console.error(error);
    });
  }

}
