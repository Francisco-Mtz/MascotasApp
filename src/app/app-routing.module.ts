import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-loc',
    loadChildren: () => import('./modal-loc/modal-loc.module').then( m => m.ModalLocPageModule)
  },
  /*
  {
    path: 'modal-sol',
    loadChildren: () => import('./modal-sol/modal-sol.module').then( m => m.ModalSolPageModule)
  },
*/
/*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'lampara',
    loadChildren: () => import('./lampara/lampara.module').then( m => m.LamparaPageModule)
  },
  {
    path: 'localizado',
    loadChildren: () => import('./localizado/localizado.module').then( m => m.LocalizadoPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
