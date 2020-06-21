import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalsComponent } from './journals/journals.component';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [ 
{
	path: 'profile',
	component: ProfileComponent,
}
]


@NgModule({
  declarations: [JournalsComponent, ProfileComponent],
  imports: [
    CommonModule,	
  	RouterModule.forChild(appRoutes)


  ]
})
export class ProfileModule { }
