import { ArtistModel } from "./artist.model"

export interface TrackModel {
  cover: string
  name: string
  album: string
  artist?: ArtistModel
  url: string
  _id: string | number
}
