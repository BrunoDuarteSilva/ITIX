import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniversariantesPage } from './aniversariantes.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AniversariantesPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../aniversarios/aniversarios.module').then(m => m.AniversariosPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../unimed/unimed.module').then(m => m.UnimedPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniversariantesPageRoutingModule { }
