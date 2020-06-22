import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopNavigationComponent, LeftNavigationComponent, FooterComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule
],    	

//*new
exports: [ //*new
TopNavigationComponent, //*new
LeftNavigationComponent, //*new
FooterComponent, //*new
SignUpComponent, //*new
SignInComponent, //*new
] //*new

})


export class SharedModule { }
