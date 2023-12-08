import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([])

  dataTracksRandom$: Observable<TrackModel[]> = of([])

  constructor() {
    const { data }: any = (dataRaw as any).default
    this.dataTracksTrending$ = of (data)

    this.dataTracksRandom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id:9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://i.scdn.co/image/ab67616d0000b2731c30988545dcde2ee3e1ed17'
      }

      setTimeout(() => {
        observer.next([trackExample])
      }, 3500)
    })
  }
}
