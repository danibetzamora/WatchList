import { Component, OnInit } from '@angular/core';
import { Video } from "../../../services/video.model";
import { VideoService } from "../../../services/video.service";
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-video-information',
  templateUrl: './video-information.component.html',
  styleUrls: ['./video-information.component.css']
})
export class VideoInformationComponent implements OnInit {
  id: string = '';
  video: Video = new Video;

  constructor(private route: ActivatedRoute, private videoService: VideoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getVideo();
      window.scrollTo(0, 0);
    });
  }

  public getVideo() {
    this.videoService.getDocument(this.id).subscribe(
      (res: any) => this.video = ({...res.data(), 'id': res.id}) as Video
    );
  }
}