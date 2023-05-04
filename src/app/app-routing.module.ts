import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SeriesComponent } from './pages/series/series.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VideosComponent } from './pages/videos/videos.component';

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
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
