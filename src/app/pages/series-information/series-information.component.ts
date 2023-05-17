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
    alert('Series added to "To Watch List"');
  }

  public watchingList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addSeriesToWatchingList(this.userId,this.id);
    alert('Series added to "Watching List"');
  }

  public watchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addSeriesToWatchedList(this.userId,this.id);
    alert('Series added to "Watched List"');
  }

  public getSeries() {
    this.seriesService.getDocument(this.id).subscribe(
      (res: any) => this.series = ({...res.data(), 'id': res.id}) as Series
    );
  }
}
