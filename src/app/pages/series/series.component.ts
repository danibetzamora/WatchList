import { Component, OnInit } from '@angular/core';
import { Series } from "../../../services/series.model";
import { SeriesService } from "../../../services/series.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Series[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  public getSeries(){
    this.seriesService.getList().subscribe(
      (res: any) => this.series = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Series[]
    );
  }
}
