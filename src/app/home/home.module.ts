import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
{
	path:'home',
	component:HomeComponent,

}
]



@NgModule({
  declarations: [HomeComponent, CardComponent, TitleComponent, SynopsisComponent, ContactinfoComponent, TimelineComponent],
  imports: [
    CommonModule,
  	RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
