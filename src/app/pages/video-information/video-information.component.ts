import { Component, OnInit } from '@angular/core';
import { Video } from "../../../services/video.model";
import { VideoService } from "../../../services/video.service";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute, ParamMap } from '@angular/router'
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-video-information',
  templateUrl: './video-information.component.html',
  styleUrls: ['./video-information.component.css']
})
export class VideoInformationComponent implements OnInit {
  id: string = '';
  video: Video = new Video;
  userId: string = '';

  isToWatch: boolean = false;
  isWatched: boolean = false;

  constructor(private route: ActivatedRoute, private videoService: VideoService, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.getVideo();
      window.scrollTo(0, 0);
    });
  }

  public toWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addVideoToWatchList(this.userId,this.id);
    this.isToWatch = true;
  }

  public watchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
    }
    this.userService.addVideoToWatchedList(this.userId,this.id);
    this.isWatched = true;
  }

  public removeFromToWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeVideoFromToWatchList(this.userId, this.id);
      this.isToWatch = false;
    }
  }

  public removeFromWatchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.removeVideoFromWatchedList(this.userId, this.id);
      this.isWatched = false;
    }
  }

  public getVideo() {
    this.videoService.getDocument(this.id).subscribe((res: any) => {
      this.video = { ...res.data(), id: res.id } as Video;
      this.checkVideoInUserToWatchList();
      this.checkVideoInUserWatchedList();
    });
  }

  private checkVideoInUserToWatchList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.videos_to_watch_list) &&
          user.videos_to_watch_list.includes(this.id)
        ) {
          this.isToWatch = true;
        }
      });
    }
  }

  private checkVideoInUserWatchedList() {
    const auth = getAuth();
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.userService.getDocument(this.userId).subscribe((res: any) => {
        const user = { ...res.data(), id: res.id };
        if (
          Array.isArray(user.videos_watched_list) &&
          user.videos_watched_list.includes(this.id)
        ) {
          this.isWatched = true;
        }
      });
    }
  }
}