import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dash-board-routing';
// import { MatAutocompleteModule, MatDividerModule, MatGridListModule, MatRadioModule } from '@angular/material';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// 
// import {
//   MatSidenavModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatListModule,
//   MatCardModule,
//   MatButtonModule,
//   MatTableModule,
//   MatDialogModule,
//   MatInputModule,
//   MatSelectModule,
// } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatIconModule,
    DashBoardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class DashBoardModule {
 
  
    
  
 }
