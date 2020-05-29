import { Component, OnInit } from '@angular/core';
import { of } from "rxjs";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import { VrlServService } from './vrl-serv.service';
import { Person	} from '../../Veteran';
import { AppService } from '../app.service';


@Component({
  selector: 'app-unique-vrl',
  templateUrl: './unique-vrl.component.html',
  styleUrls: ['./unique-vrl.component.css']
  })

export class UniqueVRLComponent implements OnInit {
	
	people$: Observable<Person[]>;
	

  constructor(
 // private veteranService: VrlServService,
  private app: AppService,
  private httpClient:HttpClient,
  private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
        console.log(paramMap);
        let id = paramMap.get('id');
        if (id == null){
          id = '-1';
        }        
        this.people$ = this.app.getPerson(id);
    });
  }

}
