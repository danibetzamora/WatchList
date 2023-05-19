import { Component, OnInit } from '@angular/core';
import { Series } from "../../../services/series.model";
import { SeriesService } from "../../../services/series.service";
import { User } from "../../../services/user.model";
import { UserService } from "../../../services/user.service";
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-series-list-pending',
  templateUrl: './series-list-pending.component.html',
  styleUrls: ['./series-list-pending.component.css']
})
export class SeriesListPendingComponent implements OnInit {
  series_list: Series[] = [];
  userId: string = '';
  user: User = new User;

  constructor(
    private seriesService: SeriesService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getListSeries();
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
}