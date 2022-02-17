import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '@app/models/track.model';
import { map, mergeMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  category: string = 'latin';
  limit: number = 50;

  constructor(
    private http: HttpClient
  ) { }

  getRecommendedTracks() {
    return this.http.get<Track[]>(`${ environment.endpoints.recommendations }?seed_genres=${ this.category }&limit=${ this.limit }`)
      .pipe(
        map( (res: any) => {
          let ids: string[] = [];

          const tracks = res.tracks.map( (item: any) => {
            ids = [ ...ids, item.id]
            return item
          })

          return { tracks, ids }
        }),
        mergeMap( (data: any) => {
          return this.checkFavoritesTracks( data.ids.join(',') )
            .pipe(
              map( ids => data.tracks.map( (track: any, index: number) => Track.import(track, ids[index]) ) )
            )
        })
      )
  }

  getFavoritesTracks() {
    return this.http.get<Track[]>(`${ environment.endpoints.favorites }?limit=${ this.limit }`)
      .pipe(
        map( (res: any) => res.items.map( (item: any) => Track.import( item.track, true )) ),
      )
  }

  checkFavoritesTracks(ids: string) {
    return this.http.get<boolean[]>(`${ environment.endpoints.checkFavorites }`, {
      params: {
        ids
      }
    })
  }

  setFavoriteTrack(id: string) {
    return this.http.put<any>(`${ environment.endpoints.favorites }`, {
      ids: [id]
    })
  }

  removeFavoriteTrack(id: string) {
    return this.http.delete<any>(`${ environment.endpoints.favorites }`, {
      body: {
        ids: [id]
      }
    })
  }

}
