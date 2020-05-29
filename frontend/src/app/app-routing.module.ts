import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UniqueVRLComponent } from './unique-vrl/unique-vrl.component';
import {LogInComponent} from "./log-in/log-in.component";
import { Mock404Component } from './mock404/mock404.component';
import { UuidSearchComponent } from './uuid-search/uuid-search.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
		{ path: 'search', component: SearchPageComponent },
			//{ path: 'vrl', component: UniqueVRLComponent },
			{ path: 'vrl/:id', component: UniqueVRLComponent },
				{ path: 'uuid/:id', component: UuidSearchComponent },
  {path: 'login', component: LogInComponent},
  {path: 'mock404', component: Mock404Component},
  {path: '**', redirectTo: 'mock404'},

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
