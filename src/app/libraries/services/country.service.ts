import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse ,HttpHeaders  } from '@angular/common/http';
import { ICountries } from '../models/countries.model';
import{Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  uri = 'http://localhost:4000/countrydetails';

  constructor(private http: HttpClient) { }

/*   addUserInfoService(FullName, Adress, Email,EnterMessage,PhoneNumber) {
    const obj = {
        FullName, Adress, Email,EnterMessage,PhoneNumber
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  } */
/*   addUserInfoService(iuser:IUser):Observable<IUser>{
    console.log('post method in services IUSER values',iuser);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<IUser>(`${this.uri}/add`, iuser, { headers: headers }).pipe(
    catchError((error) => {
      return throwError(error);
    })
  );
  } */

 
 

/////////////////////////////


  /* getCountryInfo() {
    return this
           .http
           .get(`${this.uri}`);
  } */

  getCountryInfo(): Observable<ICountries[]> {
      console.log('in get method using country service');
    return this.http.get<ICountries[]>(`${this.uri}`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


}