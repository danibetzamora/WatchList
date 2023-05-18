import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from "../../../services/user.model";
import { UserService} from "../../../services/user.service";
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  userId: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(){
    const auth = getAuth();
  if (auth.currentUser) {
    this.userId = auth.currentUser.uid;
    this.userService.getDocument(this.userId).subscribe((doc) => {
      this.user = doc.data() as User;
    });
  }
  }
}
