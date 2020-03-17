import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material/datepicker';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";
// import {MatNativeDateModule} from '@angular/material';
// import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter"


// import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadSpinnerComponent } from './libraries/components/load-spinner/load-spinner.component';
import { LoadSpinnerInterceptor } from './libraries/interceptors/loadspinner.interceptor';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import { EventsComponent } from './events/events.component';
import { UserDBDataComponent } from './user-dbdata/user-dbdata.component';
import { UserDetailsComponent } from './user-details/user-details.component';


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
//   MatSnackBarModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoadSpinnerComponent,
    WellcomePageComponent,
    EventsComponent,
    UserDBDataComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule, FormsModule, ReactiveFormsModule,
     FlexLayoutModule,MatRadioModule,MatDatepickerModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadSpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
