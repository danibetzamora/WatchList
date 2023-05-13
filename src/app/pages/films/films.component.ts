import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit { 
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  public getFilms(){
    this.filmService.getList().subscribe(
      (res: any) => this.films = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Film[]
    );
  }
}