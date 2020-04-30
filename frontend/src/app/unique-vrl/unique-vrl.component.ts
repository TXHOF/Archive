import { Component, OnInit } from '@angular/core';
import { of } from "rxjs";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";

const source = of(1, 2, 3, 4, 5);

class veteran {
	id: number;
	name: string;
	email: string;
	tel: string;
	
}


@Component({
  //selector: 'app-unique-vrl',
  //templateUrl: './unique-vrl.component.html',
  //styleUrls: ['./unique-vrl.component.css']
  selector: 'veterans',
  template: `
  <ul *ngIf="veteransObservable | async as veterans else empty">
  <li *ngFor="let veteran of veterans">
  
  </li>
  </ul>
  <ng-template #empty> No Veterans Yet </ng-template> 
`})

export class UniqueVRLComponent implements OnInit {
	
	veteransObservable : Observable<veteran[]>;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
	  this.veteransObservable = this.httpClient
	  .get<veteran[]>("http://localhost:3000/veterans")
	  //.do(console.log);
	  tap(() => {
		console.log('test')
	  })//.subscribe(_ => console.log("water is flowing!"));
	
  }

}
