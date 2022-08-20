import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { dishInterface } from '../dishInterface';
import {map} from "rxjs/operators";


@Component({
  selector: 'app-shopping',
  templateUrl: `./shopping.component.html`
})


export class ShoppingComponent implements OnInit {
  constructor(private data: DataService) { }
  sumEuro = 0;
  sumUSD = 0;
  sum = 0;
  howManyDishes = 0;
  dishesList: any;
  ngOnInit(): void {
    this.getListOfBookedDishes();
  }
  getListOfBookedDishes(): void{
    let x = 0;
    let y = 0;
    let s1 = 0;
    let s2 = 0;
    this.data.getList().pipe(
      map(changes =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) => {
          return ({key: c.payload.key, ...c.payload.val()}); }
        ).filter( (c: any) => c.booked > 0)
          .map((c: any) => {
            x += c.booked;
            y ++;
            if (c.currency == 'USD'){
              s1 += c.price;
            }
            else{
              s2 += c.price;
            }
            return c;
          }))
    ).subscribe(
      list => {
        this.sum = x;
        this.howManyDishes = y;
        this.sumUSD = s1;
        this.sumEuro = s2;
        x = 0;
        y = 0;
        s1 = 0;
        s2 = 0;
        this.dishesList = list;
      });
  }
}
