import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module' //*new
import { Routes, RouterModule } from '@angular/router'; //*new
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'; //*new
import { ProfileModule } from './profile/profile.module'; //*new
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'; //*new drag and drop'


const appRoutes: Routes = [
{
  path: 'home',
  loadChildren: './home/home.module#HomeModule'
},
{
  path:'profile',
  loadChildren:'./profile/profile.module#ProfileModule'
},
{
  path: '',
  redirectTo:'/home',
  pathMatch:'full'

}

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, //*new

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}