import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnimedPage } from './unimed.page';

const routes: Routes = [
  {
    path: '',
    component: UnimedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnimedPageRoutingModule {}
