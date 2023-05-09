import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { Series } from "../../../services/series.model";
import { SeriesService } from "../../../services/series.service";
import { Video } from "../../../services/video.model";
import { VideoService } from "../../../services/video.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  films: Film[] = [];
  series: Series[] = [];
  videos: Video[] = [];

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

  mySeries: Series = {
    id: '1',
    title: "Game of Thrones",
    director: 'David Benioff',
    cast: ['Emilia Clarke', 'Kit Harington'],
    episodes: '73',
    seasons: '8',
    release_date: '2011',
    genres: ['Fantasy', 'Adventure'],
    synopsis: "After a long summer of several years, the dreaded winter approaches the Seven Kingdoms. Lord Eddard 'Ned' Stark, Lord of Winterfell, leaves his domain to go to the court of his friend, King Robert Baratheon, in King's Landing, the capital of the Seven Kingdoms. Stark becomes the Hand of the King and tries to unravel a tangle of intrigue that will endanger his life and the lives of all his people.",
    links: ['https://www.hbomax.com'],
    image: 'https://firebasestorage.googleapis.com/v0/b/watchlist-c68bc.appspot.com/o/series%2Fgame_of_thrones.jpg?alt=media&token=891b9cc2-d670-4ff6-ba28-13fd2e6653e7'
  };

  myVideo: Video = {
    id: '1',
    title: "LeBron James Is a Basketball Genius",
    creator: 'Bill Simmons',
    release_date: '2023',
    category: 'Podcast',
    description: 'The Ringer’s Bill Simmons is joined by Ryen Russillo to discuss LeBron James’s basketball mind and his ability to conserve energy in the playoffs.',
    duration: '7',
    link: 'https://www.hbomax.com',
    image: 'https://firebasestorage.googleapis.com/v0/b/watchlist-c68bc.appspot.com/o/videos%2Flebron.jpg?alt=media&token=e39afc6b-c8ea-4fba-8733-b0cf1ff683b7'
  };

  constructor(
    private filmService: FilmService, 
    private seriesService: SeriesService, 
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.getFilms();
    this.getSeries();
    this.getVideos();

    //Method to create a film on firebase
    //this.filmService.create(this.myFilm);
    //this.seriesService.create(this.mySeries);
    //this.videoService.create(this.myVideo);
  }

  public getFilms(){
    this.filmService.getList().subscribe(
      (res: any) => this.films = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Film[]
    );
  }

  public getSeries(){
    this.seriesService.getList().subscribe(
      (res: any) => this.series = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Series[]
    );
  }

  public getVideos(){
    this.videoService.getList().subscribe(
      (res: any) => this.videos = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Video[]
    );
  }

}
