import { Component, OnInit } from '@angular/core';
import { Video } from "../../../services/video.model";
import { VideoService } from "../../../services/video.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.getVideos();
  }

  public getVideos(){
    this.videoService.getList().subscribe(
      (res: any) => this.videos = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as Video[]
    );
  }
}
