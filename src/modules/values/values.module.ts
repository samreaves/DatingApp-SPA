import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ValuesComponent } from '../../components/values/values.component';
import { ValuesService } from 'src/services';

@NgModule({
  declarations: [
    ValuesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ValuesService
  ]
})
export class ValuesModule { }