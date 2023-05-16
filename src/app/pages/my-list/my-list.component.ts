import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { User } from "../../../services/user.model";
import { UserService } from "../../../services/user.service";
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  films: Film[] = [];
  userId: string = '';
  user: User = new User;

  constructor(
    private filmService: FilmService, 
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getListFilms();
  }

  public getListFilms(){
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }

    this.userService.getDocument(this.userId).subscribe(
      (res: any) => {
        this.user = ({...res.data(), 'id': res.id}) as User;
        
        if (Array.isArray(this.user.to_watch_list)) {
          for (const filmID of this.user.to_watch_list) {
            this.filmService.getDocument(filmID).subscribe(
              (res: any) => this.films.push({ ...res.data(), 'id': res.id})
            );
          }
        }
      }
    );

    /*
    this.userService.getDocument(this.userId).subscribe(
      (res: any) => this.user = ({...res.data(), 'id': res.id}) as User
    );
    
    /*
    this.user.to_watch_list.forEach((filmID) => {
      this.filmService.getDocument(filmID).subscribe(
        (res: any) => this.films.push({ ...res.data(), 'id': res.id})
      )
      }
    );
    */
    /*
    if (Array.isArray(this.user.to_watch_list)) {
      for (const filmID of this.user.to_watch_list) {
        this.filmService.getDocument(filmID).subscribe(
          (res: any) => this.films.push({ ...res.data(), 'id': res.id})
        );
      }
    }
    */
  }
}