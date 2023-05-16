import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute, ParamMap } from '@angular/router'
import { getAuth, User } from 'firebase/auth';

@Component({
  selector: 'app-film-information',
  templateUrl: './film-information.component.html',
  styleUrls: ['./film-information.component.css']
})
export class FilmInformationComponent implements OnInit {
  id: string = '';
  film: Film = new Film;
  userId: string = '';

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
  }

  public watchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addFilmToWatchedList(this.userId,this.id);
  }

  public getFilm() {
    this.filmService.getDocument(this.id).subscribe(
      (res: any) => this.film = ({...res.data(), 'id': res.id}) as Film
    );
  }
}
