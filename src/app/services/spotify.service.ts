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
      'Authorization': 'Bearer BQC-9c-J4bv4p0_wcfLws6upuI5NFzrq37RhU5rF1BeRz4K02O4CMYgq32AsIVlJSQtGI2_zLB46Fm0gRRo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }
}
