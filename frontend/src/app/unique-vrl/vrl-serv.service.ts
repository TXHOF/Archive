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
	private vrlID = 'http://localhost:8080/vrl?id=';

  constructor(private http: HttpClient) { }
  
	/*getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }*/
  
	/*(getInfo(id1: boolean, id: String): Observable<Person[]>{
		console.log(this.peopleUrl + id);
		return this.http.get<Person[]>(this.specificPersonUrl + id);
	}*/
	
	getPersonUUID(uuid: String): Observable<Person[]> {
    console.log(this.peopleUrl + uuid);
    return this.http.get<Person[]>(this.vrlID + uuid);
	}
	
    getPerson(id: String): Observable<Person[]> {
    console.log(this.peopleUrl + id);
    return this.http.get<Person[]>(this.specificPersonUrl + id);
  }
}
