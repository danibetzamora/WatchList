import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmsListPendingComponent } from './pages/films-list-pending/films-list-pending.component';
import { FilmsListViewComponent } from './pages/films-list-view/films-list-view.component';
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

const routes: Routes = [
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'films',
    component: FilmsComponent
  },
  {
    path: 'films-list-pending',
    component: FilmsListPendingComponent
  },
  {
    path: 'films-list-view',
    component: FilmsListViewComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-list',
    component: MyListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'series-list-pending',
    component: SeriesListPendingComponent
  },
  {
    path: 'series-list-seeing',
    component: SeriesListSeeingComponent
  },
  {
    path: 'films-list-view',
    component: SeriesListViewComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'videos-list-pending',
    component: VideosListPendingComponent
  },
  {
    path: 'videos-list-view',
    component: VideosListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
