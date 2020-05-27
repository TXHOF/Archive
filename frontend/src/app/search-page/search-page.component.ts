import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(@Inject(AppService) private app:AppService) { }

  ngOnInit(): void {
  }

}
