import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'recarga-telefonica',
    loadChildren: './recarga-telefonica/recarga-telefonica.module#RecargaTelefonicaPageModule'
  },
  {
    path: 'dados-recarga',
    loadChildren: './dados-recarga/dados-recarga.module#DadosRecargaPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
