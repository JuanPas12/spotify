import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/service/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    name: 'Hola',
    album: 'Hola',
    url: 'http://localhost/track.mp3',
    _id: 1
  };

  listObservers$:Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) => {
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
