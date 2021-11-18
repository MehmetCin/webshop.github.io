import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {tap, map, catchError} from 'rxjs/operators';
import { Organisation } from '../models/organisation.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  apiurl: string = 'http://localhost:3000/person';
  constructor(private http: HttpClient) {  }

  changeUrl(url:string): void{
    this.apiurl = url;
  }

  getOrganisation(): Observable<Organisation[]>{
    return this.http.get(this.apiurl).pipe(
      map(res => this.parseData(res))
    );
  }

  parseData(json:any): Organisation[]{
    return Object.keys(json).map(key =>{
      let organisation = new Organisation(json[key].id, json[key].email, json[key].companyNumber, json[key].accountNumber,
        json[key].companyName, json[key].description, json[key].image, json[key].location);
      return organisation;
    })
  }
}
