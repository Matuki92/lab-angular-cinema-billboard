import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyMovieComponent } from './components/my-movie/my-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
