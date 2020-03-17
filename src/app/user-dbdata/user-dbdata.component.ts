import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UserDetailsService } from '../user-details/userdetails.service';
import { IUser } from '.././libraries/models/user.model';
// import { SnackBarService } from '../libraries/services/snackBar.service';
@Component({
  selector: 'app-user-dbdata',
  templateUrl: './user-dbdata.component.html',
  styleUrls: ['./user-dbdata.component.css']
})

export class UserDBDataComponent implements OnInit {
  displayedColumns: string[] = ['FullName', 'Adress', 'Email', 'EnterMessage', 'PhoneNumber'];
  iusermodel: IUser[];
  elementData: IUser[];
  dataSource: any;

  constructor(private dbdata: UserDetailsService) {

    this.dbdata
      .getUserInfo()
      .subscribe(response => {
        this.elementData = response;
        console.log('After Subscribe in Component')
      },
        (error) => console.log('Yooo DB closed I guess')
      );
  }

  ngOnInit() {
    this.iusermodel = this.elementData;
    console.log(this.elementData);
  }

}