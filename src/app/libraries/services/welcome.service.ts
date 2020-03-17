import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WelcomeService {

    private messageService$ = new BehaviorSubject('vytla');
    // public messageService$ = new Subject();
    currentMessage = this.messageService$.asObservable();
    changeMessage(message: string) {
        this.messageService$.next(message);



        // if we want to go with subject and subscribe here then use 
        /* this.messageService$.subscribe(msg =>{
            console.log('subject data in serivces :',msg);
        })
 */
    }
    /*   sendMessage(message: any) {
          this.subject.next({ any: message });
          console.log('Services data is:',message);
          this.subject=message;
      }
  
      clearMessages() {
          this.subject.next();
      }
  
      getMessage(): Observable<any> {
          return this.subject.asObservable();
      } */


}
