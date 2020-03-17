import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsService } from '../user-details/userdetails.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { SnackBarService } from '../libraries/services/snackBar.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  angForm: FormGroup;
  durationInSeconds = 5;
  hide = true;
  constructor(private fb: FormBuilder, private userDetailsService: UserDetailsService) {
    this.createForm();
  }


  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      FullName: ['', Validators.required],
      Adress: ['', Validators.required],
      Email: ['', Validators.required],
      EnterMessage: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }



  SaveDataToDB() {
    console.log("Save DB Values", this.angForm.value);
    this.onSave(this.angForm.value);
  }

  onSave(data) {
    console.log('post method in component');
    this.userDetailsService.addUserInfoService(data)
      .subscribe(response => console.log('After Subscribe in Component'),
        (error) => console.log('Yooo DB closed I guess')
      );
  }

}