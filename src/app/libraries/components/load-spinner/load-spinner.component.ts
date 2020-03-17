import { Component, OnInit } from '@angular/core';
import { LoadSpinnerService } from '../../services/loadspinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'load-spinner',
  template: `<div *ngIf="isLoading | async" class="overlay">
  <mat-progress-spinner class="spinner"  [mode]="mode">
  </mat-progress-spinner>
</div>`,
  styles: [`
  .overlay {
    position:fixed;
    display:block;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:rgba(74,74,74,.8);
    z-index:99999;
  }
  .spinner {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }`]
})
export class LoadSpinnerComponent implements OnInit {
  mode = 'indeterminate';
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoadSpinnerService) { }

  ngOnInit() {
    console.log('hi spinner');
  }

}
