import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module'; 
import { AppComponent } from '../../components/app/app.component';
import { ValuesModule } from '../values/values.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ValuesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
