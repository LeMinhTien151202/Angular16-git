import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{path: 'template', component: TemplateDrivenFormComponent },
//khong có đường dẫn chạy đến home
{path: '', component: HomeComponent },
//nếu như sai đường dẫn hoặc ko có thì chạy đến pagenotfound
{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
