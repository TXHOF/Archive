import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { of } from "rxjs";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
//import { VrlServService } from './vrl-serv.service';
import { Person	} from '../../Veteran';
import { AppService } from '../app.service';

/*const source = of(1, 2, 3, 4, 5);

class veteran {
	id: number;
	name: string;
	email: string;
	tel: string;
	
}*/


@Component({
  selector: 'app-unique-vrl',
  templateUrl: './unique-vrl.component.html',
  styleUrls: ['./unique-vrl.component.css']
  /*selector: 'veterans',
  template: `
  <ul *ngIf="veteransObservable | async as veterans else empty">
  <li *ngFor="let veteran of veterans">
  
  </li>
  </ul>
  <ng-template #empty> No Veterans Yet </ng-template> `*/
  })

export class UniqueVRLComponent implements OnInit {
	
	people$: Observable<Person[]>;
	//veteransObservable : Observable<veteran[]>;

  constructor(
    private app:AppService,
    //private veteranService: VrlServService,
    private httpClient:HttpClient,
    private activeRoute: ActivatedRoute
    ) { }

  ngOnInit() {
	  this.activeRoute.paramMap.subscribe(paramMap => {
        console.log(paramMap);
        let id = paramMap.get('id');
        if (id == null){
          id = '-1';
        }        
        this.people$ = this.app.getPerson(id);
		
	  });
		
	 /* this.veteransObservable = this.httpClient
	  .get<veteran[]>("http://localhost:3000/veterans")
	  //.do(console.log);
	  tap(() => {
		console.log('test')
	  }).subscribe(_ => console.log("water is flowing!"));*/
	
  }

}
