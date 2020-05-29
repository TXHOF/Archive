import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/Veteran';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

  authenticated = false;
  //private peopleUrl = 'http://localhost:8080/showPeople'; //URL's to web API
  private specificPersonUrl = 'http://localhost:8080/api?searchTerms=';


  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('user', {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

    getPerson(id: String): Observable<Person[]> {
        console.log(this.specificPersonUrl + id);
        return this.http.get<Person[]>(this.specificPersonUrl + id);
      }

}