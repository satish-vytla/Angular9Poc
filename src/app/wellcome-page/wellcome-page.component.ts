import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../libraries/services/country.service'
import { ICountries } from '../libraries/models/countries.model';
// import { SnackBarService } from '../libraries/services/snackBar.service';
import { WelcomeService } from '../libraries/services/welcome.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription,BehaviorSubject } from 'rxjs';


export interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-wellcome-page',
  templateUrl: './wellcome-page.component.html',
  styleUrls: ['./wellcome-page.component.scss']
})
export class WellcomePageComponent implements OnInit {

  countrydata: any;
  formdata: any;
   
  countryForm: FormGroup;


  animals: Animal[] = [
    { name: 'US', sound: 'DEVIL’S PATH' },
    { name: 'CANADA', sound: 'LAKE PEYTO' },
    { name: 'New Zealand', sound: 'MOUNT TARANAKI' },
    { name: 'INDIA', sound: 'Great Lakes, Jammu and Kashmir' },
  ];
  favoriteSeason: string;
  AdvanceSearch: boolean;
  messageFromSibling: any;
  
  subscription: Subscription;
  seasonsArray: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(private fb: FormBuilder, public countryService: CountryDetailsService, private welcomeService: WelcomeService) {

    this.countryService.getCountryInfo().subscribe(response => {
      this.countrydata = response;
      console.log('country Details in Constructor ', this.countrydata);

    },
      (error) => console.log('Yooo clountry DB closed I guess')
    );

    //form
    this.createForm();

//
  
  }

  ngOnInit() {
    this.AdvanceSearch = false;
   
  }

  createForm() {
    this.countryForm = this.fb.group({
      CountryName: ['', Validators.required],
      Location: ['', Validators.required],
      Season: [''],
      seasonsArray:[''],
      Date: ['', Validators.required]
    });
   
  }

  advanceSearch() {
 
    this.AdvanceSearch = true;
    
    this.formdata=this.countryForm.value;
    console.log('wellcome component Msg:',this.formdata);
    // this.sendMessage();
   /*  this.welcomeService.updateMessage(this.formdata);
    console.log('NGONchanges function ',this.formdata); */
  }

  ngAfterViewChecked() {
    this.welcomeService.changeMessage(this.countryForm.value); 
  }







// currentNameSubject$.next('Obama');
/* currentNameSubject$.getValue();
currentNameSubject$.next('Obama'); */


}



/* db.countries.insertMany(
  [
      { CountryName: "USA",  Location: "DEVIL’S PATH", Season:"Summer",EnterMessage:"satishvytla txt",ZipCode:20001,Date:09/19/19 },
      { CountryName: "CANADA", Location: "LAKE PEYTO", Season:"Winter",EnterMessage:"satishvytla txt",ZipCode:20001,Date:09/19/19 },
      { CountryName: "New Zealand", Location: "MOUNT TARANAKI", Season:"Spring",EnterMessage:"satishvytla txt",ZipCode:20001,Date:09/19/19 },
      { CountryName: "INDIA", Location: "Great Lakes, Jammu and Kashmir", Season:"Autumn",EnterMessage:"satishvytla txt",ZipCode:20001,Date:09/19/19 },
     
  ]
) */