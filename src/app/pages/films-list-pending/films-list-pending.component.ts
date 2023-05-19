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
export class FilmsListPendingComponent implements OnInit {
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
    this.films = [];
    
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }

    this.userService.getDocument(this.userId).subscribe(
      (res: any) => {
        this.user = ({...res.data(), 'id': res.id}) as User;
        
        if (Array.isArray(this.user.films_to_watch_list)) {
          const uniqueFilmIds = new Set<string>();

          for (const filmID of this.user.films_to_watch_list) {
            this.filmService.getDocument(filmID).subscribe(
              (res: any) => {
                const film = { ...res.data(), 'id': res.id };
                if (!uniqueFilmIds.has(film.id)) {
                  uniqueFilmIds.add(film.id);
                  this.films.push(film);
                }
              }
            );
          }
        }
      }
    );
  }
}
