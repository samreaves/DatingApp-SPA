import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuesComponent } from 'src/components';

const routes: Routes = [
  { path: '', component: ValuesComponent },
  { path: 'values', component: ValuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
