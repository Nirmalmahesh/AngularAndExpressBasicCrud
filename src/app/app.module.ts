import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
