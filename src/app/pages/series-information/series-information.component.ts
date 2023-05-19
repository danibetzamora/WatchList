import { Component, OnInit } from '@angular/core';
import { Series } from "../../../services/series.model";
import { SeriesService } from "../../../services/series.service";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute, ParamMap } from '@angular/router'
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-series-information',
  templateUrl: './series-information.component.html',
  styleUrls: ['./series-information.component.css']
})
export class SeriesInformationComponent implements OnInit {
  id: string = '';
  series: Series = new Series;
  userId: string = '';

  isToWatch: boolean = false;
  isWatching: boolean = false;
  isWatched: boolean = false;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getSeries();
    });
  }

  public toWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addSeriesToWatchList(this.userId,this.id);
    this.isToWatch = true;
  }

  public watchingList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addSeriesToWatchingList(this.userId,this.id);
    this.isWatching = true;
  }

  public watchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addSeriesToWatchedList(this.userId,this.id);
    this.isWatched = true;
  }

  public removeFromToWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeSeriesFromToWatchList(this.userId, this.id);
      this.isToWatch = false;
    }
  }

  public removeFromWatchingList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeSeriesFromWatchingList(this.userId, this.id);
      this.isWatching = false;
    }
  }

  public removeFromWatchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeSeriesFromWatchedList(this.userId, this.id);
      this.isWatched = false;
    }
  }

  public getSeries() {
    this.seriesService.getDocument(this.id).subscribe((res: any) => {
      this.series = { ...res.data(), id: res.id } as Series;
      this.checkSeriesInUserToWatchList();
      this.checkSeriesInUserWatchingList();
      this.checkSeriesInUserWatchedList();
    });
  }

  private checkSeriesInUserToWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.series_to_watch_list) &&
          user.series_to_watch_list.includes(this.id)
        ) {
          this.isToWatch = true;
        }
      });
    }
  }

  private checkSeriesInUserWatchingList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.series_watching_list) &&
          user.series_watching_list.includes(this.id)
        ) {
          this.isWatching = true;
        }
      });
    }
  }

  private checkSeriesInUserWatchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.series_watched_list) &&
          user.series_watched_list.includes(this.id)
        ) {
          this.isWatched = true;
        }
      });
    }
  }
}
