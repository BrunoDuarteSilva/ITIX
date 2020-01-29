import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const routes: Routes = [
  { path: '', redirectTo: 'aniversariantes', pathMatch: 'full' },
  {
    path: 'aniversariantes',
    loadChildren: () => import('./pages/aniversariantes/aniversariantes.module').then( m => m.AniversariantesPageModule)
  },
  {
    path: 'aniversarios',
    loadChildren: () => import('./pages/aniversarios/aniversarios.module').then( m => m.AniversariosPageModule)
  },
  {
    path: 'unimed',
    loadChildren: () => import('./pages/unimed/unimed.module').then( m => m.UnimedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FontAwesomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
