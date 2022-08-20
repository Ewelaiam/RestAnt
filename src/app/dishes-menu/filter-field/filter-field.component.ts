import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SetToPipe } from '../../set-to-pipe';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.css']
})
export class FilterFieldComponent implements OnInit {
  flag = false;
  typeChosen = '';
  highPriceChosen = '';
  categoryChosen = '';
  textChosen = '';
  lowPriceChosen = '';
  rateChosen = '';
  @Output() newItemEvent = new EventEmitter<SetToPipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.flag = !this.flag;
  }
  emit(): void {
    const x: SetToPipe = {
      cuisine_type_category: this.textChosen,
      lowPrice: parseInt(this.lowPriceChosen),
      highPrice: parseInt(this.highPriceChosen),
      rate: this.rateChosen
    };

    this.newItemEvent.emit(x);
  }

}
