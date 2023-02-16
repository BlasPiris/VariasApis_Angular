import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/component/home/home.component';
import{GiphyComponent} from '../app/component/giphy/giphy.component';
import{UnsplashComponent} from '../app/component/unsplash/unsplash.component'

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'unsplash',component:UnsplashComponent},
  {path: 'giphy',component:GiphyComponent},
  {path: '**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
