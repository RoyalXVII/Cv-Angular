import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{ component: AboutComponent, path: 'about' } , { component: CvComponent, path: 'cv' },  { path: '',   redirectTo: '/about', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

