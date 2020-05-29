import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from '../../Veteran';

@Injectable({
  providedIn: 'root'
})
export class UuidServService {

	private vrlID = 'http://localhost:8080/vrl?id=';

  constructor(private http: HttpClient) { }
  
  getPersonUUID(uuid: String): Observable<Person[]> {
    //console.log(this.vrlID + uuid);
    return this.http.get<Person[]>(this.vrlID + uuid);
	}
}
