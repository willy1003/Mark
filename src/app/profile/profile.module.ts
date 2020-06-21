import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalsComponent } from './journals/journals.component';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { EditJournalComponent } from './edit-journal/edit-journal.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [ 
{
	path: 'profile',
	component: ProfileComponent,
},
{	
	path: 'profile/create-journal',
	component: CreateJournalComponent,
},
{
	path: 'profile/edit-journal:id',
	component: EditJournalComponent,
}
]


@NgModule({   
declarations: [ProfileComponent, JournalsComponent, CreateJournalComponent, EditJournalComponent],   
imports: [
     CommonModule,     
     RouterModule.forChild(appRoutes), // *new  
     ReactiveFormsModule,
     ]  })  

export class ProfileModule { }


