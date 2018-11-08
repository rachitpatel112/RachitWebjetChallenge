import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { MovieList } from './MovieList.model';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  cinemaWorldApiUrl="cinemaworld";
  filmWorldApiUrl = "filmworld";
  


  constructor(private http:HttpClient) {

   }

   getFilmList() : Observable<Movie[]>
   {
      return this.http.get<MovieList>(`${environment.baseUrl}api/${this.filmWorldApiUrl}/movies`,httpOptions)
      .pipe(map(movie=>movie.Movies));
   }

   getCinemaList() : Observable<Movie[]>
   {
    return this.http.get<MovieList>(`${environment.baseUrl}api/${this.cinemaWorldApiUrl}/movies`,httpOptions)
    .pipe(map(movie=>movie.Movies));
   }

   getAFilm(id:string) : Observable<Movie>
   {
      return this.http.get<Movie>(`${environment.baseUrl}api/${this.filmWorldApiUrl}/movie/${id}`,httpOptions)
   }

   getACinema(id:string) : Observable<Movie>
   {
      return this.http.get<Movie>(`${environment.baseUrl}api/${this.cinemaWorldApiUrl}/movie/${id}`,httpOptions)
   }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-access-token': 'sjd1HfkjU83ksdsm3802k',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type'
  })
};
