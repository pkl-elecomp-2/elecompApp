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
    path: 'detailartikel',
    loadChildren: () => import('./pages/detail-artikel/detail-artikel.module').then( m => m.DetailArtikelPageModule)
  },
  {
    path: 'detailpromo',
    loadChildren: () => import('./pages/detail-promo/detail-promo.module').then( m => m.DetailPromoPageModule)
  },
  {
    path: 'listpromo',
    loadChildren: () => import('./pages/list-promo/list-promo.module').then( m => m.ListPromoPageModule)
  },
  {
    path: 'detailevent',
    loadChildren: () => import('./pages/detail-event/detail-event.module').then( m => m.DetailEventPageModule)
  },
  {
    path: 'listevent',
    loadChildren: () => import('./pages/list-event/list-event.module').then( m => m.ListEventPageModule)
  },
  {
    path: 'detailgaleri',
    loadChildren: () => import('./pages/detail-galeri/detail-galeri.module').then( m => m.DetailGaleriPageModule)
  },
  {
    path: 'listgaleri',
    loadChildren: () => import('./pages/list-galeri/list-galeri.module').then( m => m.ListGaleriPageModule)
  },
  {
    path: 'detailmember',
    loadChildren: () => import('./pages/detail-member/detail-member.module').then( m => m.DetailMemberPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
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
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
