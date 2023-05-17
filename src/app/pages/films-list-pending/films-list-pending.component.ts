import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { User } from "../../../services/user.model";
import { UserService } from "../../../services/user.service";
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-films-list-pending',
  templateUrl: './films-list-pending.component.html',
  styleUrls: ['./films-list-pending.component.css']
})
export class FilmsListPendingComponent {

}
