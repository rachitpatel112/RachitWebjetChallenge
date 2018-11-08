import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Movie } from './movie.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService)
  {

  }

  ngOnInit()
  {
     this.getFilmsAndCinemas();
    // // //Sort Array by Price
    // this.newMovies = this.Movies.sort((a, b) => {return a.Price - b.Price });
    // console.log(this.newMovies);
  }
  title = 'webjetapp';

  Movies: Movie[]=[];

  getFilmsAndCinemas()
  {
    //Film
     this.authService.getFilmList()
     .subscribe(movies=>
      {
        movies.forEach(item=>{
          this.authService.getAFilm(item.ID)
          .subscribe(movie=>{
            this.Movies.push(movie);
          }),error=>{};
        });
      },error=>{});

      //Cinema
      this.authService.getCinemaList()
     .subscribe(movies=>
      {
        movies.forEach(item=>{
          this.authService.getACinema(item.ID)
          .subscribe(movie=>{
            this.Movies.push(movie);
          },error=>{});
        });
      },error=>{});

      
  }
}
