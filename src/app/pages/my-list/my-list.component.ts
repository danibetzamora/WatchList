import { Component, OnInit } from '@angular/core';
import { Film } from "../../../services/film.model";
import { FilmService } from "../../../services/film.service";
import { Series } from "../../../services/series.model";
import { SeriesService } from "../../../services/series.service";
import { Video } from "../../../services/video.model";
import { VideoService } from "../../../services/video.service";
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
  series_list: Series[] = [];
  videos: Video[] = [];
  userId: string = '';
  user: User = new User;

  constructor(
    private filmService: FilmService, 
    private seriesService: SeriesService,
    private videoService: VideoService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getListFilms();
    this.getListSeries();
    this.getListVideos();
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

  public getListSeries(){
    this.series_list = [];
    
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }

    this.userService.getDocument(this.userId).subscribe(
      (res: any) => {
        this.user = ({...res.data(), 'id': res.id}) as User;
        
        if (Array.isArray(this.user.series_to_watch_list)) {
          const uniqueSeriesIds = new Set<string>();

          for (const seriesID of this.user.series_to_watch_list) {
            this.seriesService.getDocument(seriesID).subscribe(
              (res: any) => {
                const series = { ...res.data(), 'id': res.id };
                if (!uniqueSeriesIds.has(series.id)) {
                  uniqueSeriesIds.add(series.id);
                  this.series_list.push(series);
                }
              }
            );
          }
        }
      }
    );
  }

  public getListVideos(){
    this.videos = [];
    
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }

    this.userService.getDocument(this.userId).subscribe(
      (res: any) => {
        this.user = ({...res.data(), 'id': res.id}) as User;
        
        if (Array.isArray(this.user.videos_to_watch_list)) {
          const uniqueVideoIds = new Set<string>();

          for (const videoID of this.user.videos_to_watch_list) {
            this.videoService.getDocument(videoID).subscribe(
              (res: any) => {
                const video = { ...res.data(), 'id': res.id };
                if (!uniqueVideoIds.has(video.id)) {
                  uniqueVideoIds.add(video.id);
                  this.videos.push(video);
                }
              }
            );
          }
        }
      }
    );
  }
}