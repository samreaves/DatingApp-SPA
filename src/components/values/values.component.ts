import { Component, OnInit } from '@angular/core';
import {Value, ValuesService } from '../../services';


@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: Value[];

  constructor(
    private valuesService: ValuesService
  ) {}

  ngOnInit() {
    this.valuesService.getValues()
      .subscribe((values: Value[]) => {
        console.log(values)
        this.values = values;
      }, error => console.error(error));
  }

}
