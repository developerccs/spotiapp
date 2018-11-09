import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('servicio spotify listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDvaJAxJ-uu6wg3ZTqKVMCaGomxjquZ-qpjE7O2mVrMZw4UHPc38B9LzLD7AzngA3UvAeDrFHkQv2wHuNU'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe( data => {
        console.log(data);
      });
  }
}
