import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private tracksService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  ngOnDestroy(): void {

  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending =  await this.tracksService.getAllTracks().toPromise()

      // .then(res => { })
      // .catch(err => {
      //   console.log('Error de conexión');
      // })
  }

  loadDataRandom(): void {
    this.tracksService.getAllRandom()
      .subscribe((response: TrackModel[]) => {
        console.log(response)
        this.tracksRandom = response
      })
  }
}
