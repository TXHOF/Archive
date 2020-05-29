import { Component, OnInit } from '@angular/core';
import { of } from "rxjs";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import { UuidServService } from './uuid-serv.service';
import { Person	} from '../../Veteran';
import { AppService } from '../app.service';

@Component({
  selector: 'app-uuid-search',
  templateUrl: './uuid-search.component.html',
  styleUrls: ['./uuid-search.component.css']
})
export class UuidSearchComponent implements OnInit {

	people$: Observable<Person[]>;

  constructor(
  private app: AppService,
  //private uuidService: UuidServService,
  private httpClient:HttpClient,
  private activeRoute: ActivatedRoute) { }

  ngOnInit() {
	  
	  this.activeRoute.paramMap.subscribe(paramMap => {
        console.log(paramMap);
        let uuid = paramMap.get('id');
        if (uuid == null){
          uuid = '-1';
        }        
        this.people$ = this.app.getPersonUUID(uuid);
	  });
	  
  }

}
