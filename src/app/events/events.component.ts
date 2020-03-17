import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { ViewChild,AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { WellcomePageComponent } from '../wellcome-page/wellcome-page.component';

import { WelcomeService } from '../libraries/services/welcome.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  messages: any[] = [];
parentdata:any;
 
  constructor(private welcomeService:WelcomeService){
  /*   welcomeService.currentMessage.subscribe(msg=>this.parentdata=msg);
    console.log('Parent data in event is :',this.parentdata); */
 
  }
  ngOnInit() {
    this.welcomeService.currentMessage.subscribe(msg=>this.parentdata=msg);
    console.log('Parent data in event is :',this.parentdata);
  }


}