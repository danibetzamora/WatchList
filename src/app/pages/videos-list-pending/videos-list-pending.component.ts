import { Component, OnInit } from '@angular/core';
import { Video } from "../../../services/video.model";
import { VideoService } from "../../../services/video.service";
import { User } from "../../../services/user.model";
import { UserService } from "../../../services/user.service";
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-videos-list-pending',
  templateUrl: './videos-list-pending.component.html',
  styleUrls: ['./videos-list-pending.component.css']
})
export class VideosListPendingComponent implements OnInit {
  videos: Video[] = [];
  userId: string = '';
  user: User = new User;

  constructor(
    private videoService: VideoService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getListVideos();
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