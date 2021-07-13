import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'beranda',
    loadChildren: () => import('./pages/beranda/beranda.module').then( m => m.BerandaPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./pages/member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'artikel',
    loadChildren: () => import('./pages/artikel/artikel.module').then( m => m.ArtikelPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
