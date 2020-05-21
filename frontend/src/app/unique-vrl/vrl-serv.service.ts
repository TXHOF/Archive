import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from '../../Veteran';

//import image

@Injectable({
  providedIn: 'root'
})
export class VrlServService {

	private peopleUrl = 'http://localhost:8080/showPeople'; //URL's to web API
	private specificPersonUrl = 'http://localhost:8080/api?searchTerms=';

  constructor(private http: HttpClient) { }
  
	/*getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }*/
  
    getPerson(id: String): Observable<Person[]> {
    console.log(this.peopleUrl + id);
    return this.http.get<Person[]>(this.specificPersonUrl + id);
  }
}
