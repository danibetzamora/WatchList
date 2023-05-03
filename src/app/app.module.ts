import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLeftComponent } from './components/page-left/page-left.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SeriesComponent } from './pages/series/series.component';
import { VideosComponent } from './pages/videos/videos.component';
import { MyListComponent } from './pages/my-list/my-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLeftComponent,
    HomeComponent,
    FilmsComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    SeriesComponent,
    VideosComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
