import {Component, Input, OnInit} from '@angular/core';
import dishes from '../../dishes.json';
import { DataService } from '../data-service/data.service';
import { dishInterface } from '../dishInterface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})

export class DishComponent implements OnInit {

  @Input() someDish!: dishInterface;
  constructor(private data: DataService) {
  }
  ngOnInit(): void {
    this.someDish.booked = 0;
  }

  getCurrency(s: string): string{
    switch (s){
      case 'EURO': return 'euro';
      case 'USD': return '$';
      default : return 'Undefined';
    }
  }
  book(): void{
    if (this.someDish.key != null) {
      this.data.update(this.someDish.key, {booked: (this.someDish.booked + 1)});
    }
  }
  cancel(): void{
    if (this.someDish.key != null) {
      this.data.update(this.someDish.key, {booked: (this.someDish.booked - 1)});
    }
  }
  delete(): void{
    if (this.someDish.key != null) {
      this.data.remove(this.someDish.key);
    }
  }








}
