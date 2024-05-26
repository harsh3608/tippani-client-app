import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedHomeComponent } from './feed-home/feed-home.component';

const routes: Routes = [
  {
    path: '',
    component: FeedHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
