import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '@app/models/track.model';
import { map } from 'rxjs';
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
        map( (res: any) => res.tracks.map( (item: any) => Track.import( item, false ) ))
      )
  }
}
