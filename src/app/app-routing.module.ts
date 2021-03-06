import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import the 3 new components/sections of the webpage so that we can configure routing
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './home/posts/posts.component'; // Add this

// Declare the paths that will be used when navigating between pages.
const routes: Routes = [
  { path: '', component: HomeComponent }, // http://websitedomain.com
  { path: 'about', component: AboutComponent }, // http://websitedomain.com/about
  { path: 'contact', component: ContactComponent }, // http://websitedomain.com/contact
  { path: 'posts/post/:article', component: PostsComponent }, // Add this
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
