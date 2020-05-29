import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
	values = '';
	
	onKey(event:any) {
		//this.values += event.target.value + ' | ';
  }
  
  constructor(private app: AppService, private _route: ActivatedRoute, private _router: Router) { }

  onSubmit(){
        this._router.navigateByUrl('vrl/' + this.values);
    }

  ngOnInit(): void {
  }

}
