import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from "../../../services/user.model";
import { UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.userService.getList().subscribe(
      (res: any) => this.users = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as User[]
    );
  }
}
