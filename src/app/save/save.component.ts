import {Component, OnInit} from '@angular/core';

import {MONTHS} from './months';
import {NUMBERS_10} from './numbers.10';
import {NUMBERS_100} from './numbers.100';
import {NUMBERS_1000} from './numbers.1000';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public months = this.getArray(MONTHS);
  public numbers10 = this.getArray(NUMBERS_10);
  public numbers100 = this.getArray(NUMBERS_100);
  public numbers1000 = this.getArray(NUMBERS_1000);

  private getArray(obj: any) {
    return Object.keys(obj).map((index) => ({
      key: index,
      value: obj[index]
    }));
  }

  constructor() {
  }

  ngOnInit() {
  }

}
