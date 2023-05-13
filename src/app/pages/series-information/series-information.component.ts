import { Component, OnInit } from '@angular/core';
import { Series } from "../../../services/series.model";
import { SeriesService } from "../../../services/series.service";
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-series-information',
  templateUrl: './series-information.component.html',
  styleUrls: ['./series-information.component.css']
})
export class SeriesInformationComponent implements OnInit {
  id: string = '';
  series: Series = new Series;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getSeries();
    });
  }

  public getSeries() {
    this.seriesService.getDocument(this.id).subscribe(
      (res: any) => this.series = ({...res.data(), 'id': res.id}) as Series
    );
  }
}
