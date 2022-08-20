import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { map } from 'rxjs/operators';
import { SetToPipe } from '../set-to-pipe';

@Component({
  selector: 'app-dishes-menu',
  templateUrl: './dishes-menu.component.html',
  styleUrls: ['./dishes-menu.component.css']
})

export class DishesMenuComponent implements OnInit {

  dishesList: any;
  dataToFilter!: SetToPipe;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getDishes();
    this.dataToFilter = {
      cuisine_type_category: '',
      lowPrice: NaN,
      highPrice: NaN,
      rate: ''
    };
  }
  getDishes(): void{
    this.data.getList().pipe(
      map(changes =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) => {
            return ({key: c.payload.key, ...c.payload.val()});
          }
        ))
    ).subscribe(
      list => {this.dishesList = list; });
  }
  makeWithData(x: SetToPipe): void{
    this.dataToFilter = x;
  }
}
