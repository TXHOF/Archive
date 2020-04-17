import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UniqueVRLComponent } from './unique-vrl/unique-vrl.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
		{ path: 'search', component: SearchPageComponent },
			{ path: 'vrl', component: UniqueVRLComponent },
			{ path: 'vrl/:id', component: UniqueVRLComponent },
		
	
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
