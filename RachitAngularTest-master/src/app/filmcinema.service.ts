import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe, forkJoin } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { MovieList } from './MovieList.model';
import { Movie } from './movie.model';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
  })

  export class FilmCinemaService
  {
      constructor(private authService: AuthService )
      {

      }

    getFilmsAndCinemas()
    {
        let films = this.authService.getFilmList();
        let cinemas = this.authService.getCinemaList();
    
        forkJoin(films, cinemas).pipe(
          map(([films, cinemas]) => films.concat(cinemas)))
          
          .subscribe(movies=>{
            
          }); 
    }
  }