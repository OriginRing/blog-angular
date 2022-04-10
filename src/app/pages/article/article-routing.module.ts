import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ArticleComponent } from './article.component';

const routes: Routes = [
  { path: ':id', component: ArticleComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ArticleRoutingModule { }
