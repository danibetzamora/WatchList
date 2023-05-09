import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent { }
/*
export class FilmsComponent implements OnInit {
  id: string = '';
  film: Film = new Film;

  constructor(private route: ActivatedRoute, private filmService: FilmService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getFilm();
    });
  }

  public getFilm() {
    this.filmService.getDocument(this.id).subscribe(
      (res: any) => this.film = ({...res.data(), 'id': res.id}) as Film
    );
  }
*/