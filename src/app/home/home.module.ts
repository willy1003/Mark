import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FeaturesComponent } from './features/features.component';

const appRoutes: Routes=[
{
	path:'home',
	component:HomeComponent,

}
]

@NgModule({
  declarations: [HomeComponent, JumbotronComponent, FeaturesComponent],
  imports: [
    CommonModule,
  	RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
