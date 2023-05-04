import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmsListPendingComponent } from './pages/films-list-pending/films-list-pending.component';
import { FilmsListViewComponent } from './pages/films-list-view/films-list-view.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { PageLeftComponent } from './components/page-left/page-left.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesListPendingComponent } from './pages/series-list-pending/series-list-pending.component';
import { SeriesListViewComponent } from './pages/series-list-view/series-list-view.component';
import { SeriesListSeeingComponent } from './pages/series-list-seeing/series-list-seeing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VideosComponent } from './pages/videos/videos.component';
import { VideosListPendingComponent } from './pages/videos-list-pending/videos-list-pending.component';
import { VideosListViewComponent } from './pages/videos-list-view/videos-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    FilmsComponent,
    FilmsListPendingComponent,
    FilmsListViewComponent,
    FilterComponent,
    HomeComponent,
    LoginComponent,
    MyListComponent,
    PageLeftComponent,
    ProfileComponent,
    SeriesComponent,
    SeriesListPendingComponent,
    SeriesListViewComponent,
    SeriesListSeeingComponent,
    SignUpComponent,
    VideosComponent,
    VideosListPendingComponent,
    VideosListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
