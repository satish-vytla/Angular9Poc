import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse ,HttpHeaders  } from '@angular/common/http';
import { IUser } from '../libraries/models/user.model';
import{Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  uri = 'http://localhost:4000/userdetails';

  constructor(private http: HttpClient) { }

/*   addUserInfoService(FullName, Adress, Email,EnterMessage,PhoneNumber) {
    const obj = {
        FullName, Adress, Email,EnterMessage,PhoneNumber
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  } */
  addUserInfoService(iuser:IUser):Observable<IUser>{
    console.log('post method in services IUSER values',iuser);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<IUser>(`${this.uri}/add`, iuser, { headers: headers }).pipe(
    catchError((error) => {
      return throwError(error);
    })
  );
  }

 
 

/////////////////////////////


/*   getUserInfo() {
    return this
           .http
           .get(`${this.uri}`);
  } */

  getUserInfo(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.uri}`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


}