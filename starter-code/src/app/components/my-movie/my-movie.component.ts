import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: object;
  movieId: number;

  constructor(private moviesService: MoviesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.movieId = params.id;
      this.movie = this.moviesService.getMovie(this.movieId);
      });
  }
}
