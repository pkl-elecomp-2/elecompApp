import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detailmember',
    loadChildren: () => import('./pages/detail-member/detail-member.module').then( m => m.DetailMemberPageModule)
  },
  {
    path: 'tiket',
    loadChildren: () => import('./pages/tiket/tiket.module').then( m => m.TiketPageModule)
  },
  {
    path: 'editClient',
    loadChildren: () => import('./pages/edit-client/edit-client.module').then( m => m.EditClientPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./pages/survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'detailTiket',
    loadChildren: () => import('./pages/detail-tiket/detail-tiket.module').then( m => m.DetailTiketPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
