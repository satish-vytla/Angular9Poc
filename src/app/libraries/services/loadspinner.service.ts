import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadSpinnerService {
  isLoading = new Subject<boolean>();
  constructor() { }


  show() {
    this.isLoading.next(true);
    console.log('isLoading works');
  }
  hide() {
    this.isLoading.next(false);
    console.log('isLoading stopped');
  }
}
