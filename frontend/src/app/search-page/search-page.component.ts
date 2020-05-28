import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient
} from "@angular/common/http";


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  values: string = '';


  onKey(event: any) { // without type info
    console.log(this.values);
  }

  constructor(private app:AppService, private _route: ActivatedRoute, private _router: Router) { }

  onSubmit(){
    this._router.navigateByUrl('vrl/' + this.values);
  }

  ngOnInit(): void {
    //this._route.queryParams.subscribe(params => {
     // this.values = params['value'];
    //});
  }

}
