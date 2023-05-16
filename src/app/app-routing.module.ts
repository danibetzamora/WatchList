import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmsListPendingComponent } from './pages/films-list-pending/films-list-pending.component';
import { FilmsListViewComponent } from './pages/films-list-view/films-list-view.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesListPendingComponent } from './pages/series-list-pending/series-list-pending.component';
import { SeriesListSeeingComponent } from './pages/series-list-seeing/series-list-seeing.component';
import { SeriesListViewComponent } from './pages/series-list-view/series-list-view.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VideosComponent } from './pages/videos/videos.component';
import { VideosListPendingComponent } from './pages/videos-list-pending/videos-list-pending.component';
import { VideosListViewComponent } from './pages/videos-list-view/videos-list-view.component';
import { FilmInformationComponent } from './pages/film-information/film-information.component';
import { SeriesInformationComponent } from './pages/series-information/series-information.component';
import { VideoInformationComponent } from './pages/video-information/video-information.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  //This is only to test without authentication implemented
  { path: '', 
    component: LoginComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'films',
    component: FilmsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'film-information/:id',
    component: FilmInformationComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'films-list-pending',
    component: FilmsListPendingComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'films-list-view',
    component: FilmsListViewComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-list',
    component: MyListComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'series',
    component: SeriesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'series-information/:id',
    component: SeriesInformationComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'series-list-pending',
    component: SeriesListPendingComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'series-list-seeing',
    component: SeriesListSeeingComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'films-list-view',
    component: SeriesListViewComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'videos',
    component: VideosComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'video-information/:id',
    component: VideoInformationComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'videos-list-pending',
    component: VideosListPendingComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'videos-list-view',
    component: VideosListViewComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
