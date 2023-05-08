import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
