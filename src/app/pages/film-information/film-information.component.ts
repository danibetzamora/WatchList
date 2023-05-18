import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute, ParamMap } from '@angular/router'
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-film-information',
  templateUrl: './film-information.component.html',
  styleUrls: ['./film-information.component.css']
})
export class FilmInformationComponent implements OnInit {
  id: string = '';
  film: Film = new Film;
  userId: string = '';

  isToWatch: boolean = false;
  isWatched: boolean = false;
  
  constructor(private route: ActivatedRoute, private filmService: FilmService, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getFilm();
    });
  }

  public toWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addFilmToWatchList(this.userId,this.id);
    this.isToWatch = true;
  }

  public watchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addFilmToWatchedList(this.userId,this.id);
    this.isWatched = true;
  }

  public removeFromToWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeFilmFromToWatchList(this.userId, this.id);
      this.isToWatch = false;
    }
  }

  public removeFromWatchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeFilmFromWatchedList(this.userId, this.id);
      this.isWatched = false;
    }
  }

  public getFilm() {
    this.filmService.getDocument(this.id).subscribe((res: any) => {
      this.film = { ...res.data(), id: res.id } as Film;
      this.checkFilmInUserToWatchList();
      this.checkFilmInUserWatchedList();
    });
  }
  
  private checkFilmInUserToWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.films_to_watch_list) &&
          user.films_to_watch_list.includes(this.id)
        ) {
          this.isToWatch = true;
        }
      });
    }
  }

  private checkFilmInUserWatchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.films_watched_list) &&
          user.films_watched_list.includes(this.id)
        ) {
          this.isWatched = true;
        }
      });
    }
  }
}
