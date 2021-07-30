import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPage } from './tab.page';
import { AuthGuard } from '../guard/auth.guard';

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
          {
            path: ':id',
            loadChildren: () => import('../pages/detail-artikel/detail-artikel.module').then( m => m.DetailArtikelPageModule )
          }
        ]
      },
      {
        path: 'member',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/member/member.module').then( m => m.MemberPageModule ),
            canActivate: [AuthGuard]
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
      },
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
