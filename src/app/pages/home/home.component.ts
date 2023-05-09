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

  // Film to be created on firebase
  myFilm: Film = {
    id: '1',
    title: "Harry Potter and the Sorcerer's Stone",
    director: 'Chris Columbus',
    cast: ['Daniel Radcliffe', 'Rupert Grint'],
    duration: '151',
    release_date: '2001',
    genres: ['Fantasy', 'Adventure'],
    production_company: 'Warner Bros',
    synopsis: 'On his eleventh birthday, Harry Potter learns that he is the son of two prominent wizards, from whom he has inherited magical powers. At Hogwarts School of Witchcraft and Wizardry, where he is educated with other children who also have special powers, he will learn everything he needs to be a wizard.',
    links: ['https://www.hbomax.com'],
    image: 'https://firebasestorage.googleapis.com/v0/b/watchlist-c68bc.appspot.com/o/films%2Fharry_potter_and_the_sorcerer_s_stone.jpg?alt=media&token=a4142dca-f686-4663-bb91-13b08d8e527f'
  };

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getFilms();

    //Method to create a film on firebase
    //this.filmService.create(this.myFilm);
  }

  public getFilms(){
    this.filmService.getList().subscribe(
      (res: any) => this.films = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Film[]
    );
  }

}
