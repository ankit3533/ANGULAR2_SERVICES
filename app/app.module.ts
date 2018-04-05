import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {EmployeeListComponent} from './employee-list.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import { TutorialsComponent } from './tutorials.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, EmployeeListComponent, EmployeeDetailComponent, TutorialsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 