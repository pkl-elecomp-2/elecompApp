import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'beranda',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/beranda/beranda.module').then( m => m.BerandaPageModule )
          },
        ]
      },
      {
        path: 'artikel',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/artikel/artikel.module').then( m => m.ArtikelPageModule )
          },
        ]
      },
      {
        path: 'member',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/member/member.module').then( m => m.MemberPageModule )
          },
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/profil/profil.module').then( m => m.ProfilPageModule )
          },
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab/beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
