import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'article', loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule) },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
